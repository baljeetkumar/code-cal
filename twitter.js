const puppeteer = require('puppeteer');
    const BASE_URL='https://twitter.com';
    const LOGIN_URL='https://twitter.com/login';

    let browser=null;
    let page=null;

    const twitter ={
        initialize: async() =>{

             browser = await puppeteer.launch({headless:false});
             page = await browser.newPage();
            await page.goto(BASE_URL);
           },
        login: async(USERNAME,PASSWORD)=>{
              
            await page.goto(LOGIN_URL);
            await page.waitFor('input[class="js-username-field email-input js-initial-focus"]');
            await page.type('input[class="js-username-field email-input js-initial-focus"]',USERNAME,{delay:50});
            await page.waitFor('input[class="js-password-field"]');
            await page.type('input[class="js-password-field"]',PASSWORD,{delay:50});
            await page.click('button[type="submit"]');
            await browser.close();
        }
    }

    module.exports= twitter;