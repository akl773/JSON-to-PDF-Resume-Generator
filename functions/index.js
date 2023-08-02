const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const ejs = require('ejs');
const {check, validationResult} = require('express-validator');
const template = require('./template');

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

let browser;
let pagePool = [];

// Initialize the Puppeteer browser instance
async function initBrowser() {
    try {
        if (!browser) {
            browser = await puppeteer.launch({
                headless: 'new',
                args: ['--disable-gpu', '--no-sandbox', '--disable-software-rasterizer']
            });
        }
    } catch (error) {
        console.error('Error initializing browser:', error);
    }
}

async function acquirePage() {
    if (pagePool.length > 0) return pagePool.pop();
    const browserInstance = await getBrowser();
    return await browserInstance.newPage();
}

async function releasePage(page) {
    await page.goto('about:blank'); // Clear the page content
    pagePool.push(page);
}

async function getBrowser() {
    if (!browser) {
        await initBrowser();
    }
    return browser;
}

// Initiate the browser upon server start
(async function () {
    await initBrowser();
})();

// Function to create a PDF from HTML content
async function createPDF(content) {
    const page = await acquirePage();
    await page.setContent(content, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4', printBackground: true});
    await releasePage(page);
    return pdf;
}

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

// Endpoint to generate PDF from JSON
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
        res.status(500).send(`An error occurred while generating the PDF: ${error.message}`);
    }
});

exports.api = functions.region('asia-south1').https.onRequest(app);
