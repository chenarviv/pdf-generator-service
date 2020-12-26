const status = require('http-status');
const decodeUrl = require('urldecode');
const puppeteerClient = require('../server/puppeteerClient');

const generatePdf = async(url) => {
	const pdf = await puppeteerClient.generatePdf(url);
	return pdf;
};

module.exports = (app, options) => {
   
  app.get('/pdf/generate', async function(req, res, next) {
	  try { 
	  		console.log("In generate pdf..."); 
			let url = req.query.url;

			if (!url) {
				console.error("Error: Missing url query param");
				return res.status(status.BAD_REQUEST).send({error: "Missing url query param"});
			}

			url = decodeUrl(url);
			const pdf = await generatePdf(url);
			console.log("Done!");
			return res.status(status.OK).send(pdf);
	  } catch (err) {
			console.error("Error occurred in generate pdf request: ", err.message);
			return res.status(status.INTERNAL_SERVER_ERROR).send({error: err.message});
	  }
	  
  });

  app.get('/pdf/healthCheck', async function(req, res, next) {
	  	return res.status(status.OK).send({status: "healthy"});
  });
  
}