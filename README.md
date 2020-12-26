## PDF Generator Service
PDF Generator is a micro service which generates a PDF from a given URL.  
The service has 2 APIs:  
1. generatePdf: GET API with URL query param, generates a PDF from the given URL and returns it.  
2. healthCheck: GET API to verify the healthiness of the service.  

### Optional environment variables  
One may provide values to the following optional env variables, and the service will use them and not the default values. (see [config file](/src/config/config.js))  
1. port: the port number that the service is running on. The default value is 3060.  
2. pdfWidth: a numeric value for the width of the generated pdf. The default value is 5960.  
3. pdfHeight: a numeric value for the height of the generated pdf. The default value is 4209.  
4. pdfMargin: a numeric value for the margin of the generated pdf. The default value is 30.  
5. selectorName: the name of some element that exists in the page DOM. It is a cue for the service that the page has been loaded entirely, and is ready to be generated to PDF.    Using this env variable is **highly recommended** for dynamic pages.   
Additional info: 
https://pptr.dev/#?product=Puppeteer&version=v1.11.0&show=api-pagewaitforselectorselector-options

### Swagger
Test the flows easily by using [swagger](http://localhost:3060/pdf/swagger-ui)