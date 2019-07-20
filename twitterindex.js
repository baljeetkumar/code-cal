const puppeteer = require('puppeteer');
const twitter =require('./twitter');
  (async () => {
    
    const USERNAME='xyz52592831';
    const PASSWORD='tweet@123';
    await twitter.initialize();

    await twitter.login(USERNAME,PASSWORD);
  

//await browser.close();
  })();