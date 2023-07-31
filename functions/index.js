const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const app = express();

app.use(cors({origin: true}));

app.post('/jsonToPdf', async (req, res) => {
    const data = req.body;

    // Convert JSON to HTML using a Handlebars template
    const template = `
  <!doctype html>
  <html>
    <head>
      <title>Resume of {{basics.name}}</title>
      <style>
        body { font-family: Arial, sans-serif; }
        h2 { color: #333; }
        p { margin: 0; }
        .section { margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <h1>{{basics.name}}</h1>
      <p>{{basics.label}}</p>
      <p>{{basics.email}}</p>
      <p>{{basics.phone}}</p>
      <p>{{basics.url}}</p>
      <p>{{basics.summary}}</p>
      <p>{{basics.location.address}}, {{basics.location.city}}, {{basics.location.region}}, {{basics.location.countryCode}}, {{basics.location.postalCode}}</p>
      
      <div class="section">
        <h2>Skills</h2>
        {{#each skills}}
          <h3>{{this.name}}</h3>
          <p>{{this.level}}</p>
          <p>{{this.keywords}}</p>
        {{/each}}
      </div>

      <div class="section">
        <h2>Education</h2>
        {{#each education}}
          <h3>{{this.institution}} ({{this.startDate}} - {{this.endDate}})</h3>
          <p>{{this.studyType}}, {{this.area}}</p>
          <p>Courses: {{this.courses}}</p>
        {{/each}}
      </div>

      <div class="section">
        <h2>Awards</h2>
        {{#each awards}}
          <p>{{this.title}} - {{this.date}} - {{this.awarder}}</p>
          <p>{{this.summary}}</p>
        {{/each}}
      </div>

      <div class="section">
        <h2>Certificates</h2>
        {{#each certificates}}
          <p>{{this.name}} - {{this.date}} - {{this.issuer}}</p>
          <p><a href="{{this.url}}">Certificate Link</a></p>
        {{/each}}
      </div>
    </body>
  </html>`;

    const html = handlebars.compile(template)(data);

    // Convert HTML to PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true });

    await browser.close();

    // Send PDF as a binary data
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
    res.send(pdf);
});


// Specify the region for the function
exports.api = functions.region('asia-south1').https.onRequest(app);
