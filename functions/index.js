const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.post('/jsonToPdf', async (req, res) => {
    const data = req.body;
    const basics = data.basics
    console.log(basics)
    const template = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Resume of <%= data.basics?.name %></title>
    <style>
      body { 
        font-family: Arial, sans-serif;
        color: #444;
        margin: 0;
        padding: 0;
      }
      .container {
        margin: 0 auto;
        max-width: 800px;
        padding: 30px;
      }
      h1, h2, h3 {
        color: #333;
      }
      h1 {
        text-align: center;
        margin-bottom: 30px;
      }
      .section {
        margin-bottom: 30px;
      }
      .subsection {
        margin-bottom: 10px;
      }
      .skills ul, .education ul {
        list-style-type: none;
        padding: 0;
      }
      .skills li, .education li {
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1><%= data.basics?.name %></h1>
      <p><%= data.basics?.label %></p>
      <p>Email: <%= data.basics?.email %></p>
      <p>Phone: <%= data.basics?.phone %></p>
      <p>Website: <%= data.basics?.url %></p>
      <p>Summary: <%= data.basics?.summary %></p>
      <p>Location: <%= data.basics?.location?.address %>, <%= data.basics?.location?.city %>, <%= data.basics?.location?.region %>, <%= data.basics?.location?.countryCode %>, <%= data.basics?.location?.postalCode %></p>
      
      <div class="section skills">
        <h2>Skills</h2>
        <ul>
        <% data.skills?.forEach(function(skill) { %>
          <li>
            <h3><%= skill.name %></h3>
            <p>Level: <%= skill.level %></p>
            <p>Keywords: <%= skill.keywords?.join(', ') %></p>
          </li>
        <% }); %>
        </ul>
      </div>

      <div class="section education">
        <h2>Education</h2>
        <ul>
        <% data.education?.forEach(function(edu) { %>
          <li>
            <h3><%= edu.institution %> (<%= edu.startDate %> - <%= edu.endDate %>)</h3>
            <p>Study: <%= edu.studyType %>, <%= edu.area %></p>
            <p>Courses: <%= edu.courses?.join(', ') %></p>
          </li>
        <% }); %>
        </ul>
      </div>

      <div class="section awards">
        <h2>Awards</h2>
        <% data.awards?.forEach(function(award) { %>
          <div class="subsection">
            <p><%= award.title %> - <%= award.date %> - <%= award.awarder %></p>
            <p><%= award.summary %></p>
          </div>
        <% }); %>
      </div>

      <div class="section certificates">
        <h2>Certificates</h2>
        <% data.certificates?.forEach(function(certificate) { %>
          <div class="subsection">
            <p><%= certificate.name %> - <%= certificate.date %> - <%= certificate.issuer %></p>
            <p><a href="<%= certificate.url %>">Certificate Link</a></p>
          </div>
        <% }); %>
      </div>
    </div>
  </body>
</html>`;


    const html = ejs.render(template, {data: data});

    // Convert HTML to PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4', printBackground: true});

    await browser.close();

    // Send PDF as a binary data
    res.set({'Content-Type': 'application/pdf', 'Content-Length': pdf.length});
    res.send(pdf);
});

// Specify the region for the function
exports.api = functions.region('asia-south1').https.onRequest(app);
