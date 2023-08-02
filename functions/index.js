const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const template = require('./template');
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.post('/jsonToPdf', async (req, res) => {
    const data = req.body;
    const basics = data.basics
    console.log(basics)

    const html = ejs.render(template, {data: data});

    // Convert HTML to PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4', printBackground: true});

    await browser.close();

    // Save the PDF to a file on the system storage
    const pdfFilePath = path.join(__dirname, 'output.pdf');

    fs.writeFileSync(pdfFilePath, pdf);

// Respond with a success message or other relevant data
//     res.json({ message: 'PDF saved successfully!' });
    res.send(html)
});

// Specify the region for the function
exports.api = functions.region('asia-south1').https.onRequest(app);
