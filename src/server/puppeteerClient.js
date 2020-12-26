const puppeteer = require('puppeteer');
const config = require('../config/config');
const pdfWidth = config.serverSettings.pdfWidth;
const pdfHeight = config.serverSettings.pdfHeight;
const pdfMargin = config.serverSettings.pdfMargin;
const selectorName = config.serverSettings.selectorName;
let browser;

const open = async () => {
    browser = await puppeteer.launch({
		args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
	});
};

const close = () => {
    if (browser) {
        browser.close().then(_ => {
            console.debug("Chromium and all of its pages have been closed.");
            browser = null;
        }).catch (err => {
            console.error("Error while closing Chromium: ", err);
        });
    }
};

const generatePdf = async (url) => {
	try { 
        console.log("Generating pdf from url: ", url);
	    const page = await browser.newPage();
		await page.setViewport({width: pdfWidth, height: pdfHeight});
        await page.goto(url, {waitUntil: 'networkidle2'});
        if (selectorName) {
            await page.waitForSelector(selectorName);
        }
		const pdf = await page.pdf({printBackground: true, margin: {top: pdfMargin, bottom: pdfMargin}});
        console.log("Pdf was generated successfully.");
        page.removeAllListeners();
        page.close();

        return pdf;
	} catch (err) {
        throw err;
	} 
};

module.exports = {
    open,
    close,
    generatePdf,
};