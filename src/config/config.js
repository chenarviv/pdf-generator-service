//configuration file

// server parameters
const serverSettings = {
  port: process.env.port || 3060,
  pdfWidth: process.env.pdfWidth || 5960,
  pdfHeight: process.env.pdfHeight || 4209,
  pdfMargin: process.env.pdfMargin || 30,
  selectorName: process.env.selectorName,
  host: process.env.host || 'localhost'
}

module.exports = Object.assign({}, { serverSettings })