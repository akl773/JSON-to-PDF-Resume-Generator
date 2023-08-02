const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const app = express();
const template = fs.readFileSync('resume.ejs', 'utf-8');

app.use(cors({origin: true}));
app.use(express.json());

app.post('/jsonToPdf', async (req, res) => {
    const data = req.body;
    const html = ejs.render(template, {data: data});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4', printBackground: true, waitFor: 1000});

    await browser.close();

    res.contentType('application/pdf');
    res.send(pdf);
});

exports.api = functions.region('asia-south1').https.onRequest(app);
