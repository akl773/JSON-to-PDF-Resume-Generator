const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const {check, validationResult} = require('express-validator');
const app = express();
const template = require('./template')

app.use(cors({origin: true}));
app.use(express.json());

app.post('/jsonToPdf', async (req, res) => {
    const html = ejs.render(template, req.body);
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4', printBackground: true, waitFor: 1000});

const validations = [
    check('managementCertification').isString().notEmpty(),
    check('name').isString().notEmpty(),
    check('aboutMe').isString().notEmpty(),
    check('keyHighlights').isArray().notEmpty(),
    check('keyHighlights.*.name').isString().notEmpty(),
    check('keyHighlights.*.value').isString().notEmpty(),
    check('skills').isArray().notEmpty(),
    check('skills.*.skillName').isString().notEmpty(),
    check('skills.*.skillExperience').isString().notEmpty(),
    check('skills.*.level').isString().notEmpty(),
    check('experienceTimeline').isArray().notEmpty(),
    check('experienceTimeline.*.position').isString().notEmpty(),
    check('experienceTimeline.*.startDate').isString().notEmpty(),
    check('experienceTimeline.*.endDate').isString().notEmpty(),
    check('experienceTimeline.*.duration').isString().notEmpty(),
    check('projects').isArray().notEmpty(),
    check('projects.*.title').isString().notEmpty(),
    check('projects.*.timeFrame').isString().notEmpty(),
    check('projects.*.rolesAndResponsibility').isString().notEmpty(),
];

app.post('/jsonToPdf', validations, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const html = ejs.render(template, req.body);
        const pdf = await createPDF(html);

        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while generating the PDF');
    }
});

exports.api = functions.region('asia-south1').https.onRequest(app);
