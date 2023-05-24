// this code will help you to read unlimited medium members write up
const puppeteer = require('puppeteer')
// medium url as argument
const url = process.argv

/*
 @main function
*/
const main = async () => {
	const browser = await puppeteer.launch({headless: false})
	const page = await browser.newPage()
		 await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  );
	await page.goto(url[2])
	
}

if(url[2] === undefined) {
	console.log("URL not found \nUsage node app.js medium-url || ./app-linux medium-url")
} else {
	console.log(url[2])
	main()
}


