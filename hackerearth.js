const puppeteer = require('puppeteer');
const BASE_URL='https://www.hackerearth.com/challenges';


let browser=null;
let page=null;

const hackerearth={
  initialize: async() =>{

    browser = await puppeteer.launch({headless:true});
    page = await browser.newPage();
   await page.goto(BASE_URL);
  },
  fun:async()=>{
    await page.pdf({
      path:'gen_pdf/hackerearth.pdf',
      format:'A4',
      pageRanges:'1-2'
              });



     let title= await page.title();
     console.log(`title of the page is ${title}`);
     let url=await page.url();
     console.log(`url of the page is ${url}`);
     await browser.close();

  }
}
module.exports=hackerearth;

// (async () => {
//   const browser = await puppeteer.launch({headless:true});
//   const page = await browser.newPage();
//   await page.goto('https://www.hackerearth.com/challenges');
  
//   await page.pdf({
//     path:'./code.pdf',
//     format:'A4',
//     pageRanges:'1-2'
//             });

//   let title= await page.title();
//   console.log(`title of the page is ${title}`);
//   let url=await page.url();
//   console.log(`url of the page is ${url}`);
 
// //   //await page.type('form[action="/search"]','http://codeforces.com/contests', {delay: 100});
// //   //await page.keyboard.press('Enter');
// //   //await page.waitForNavigation();
// //   await page.screenshot({path: 'example.png'});

// await browser.close();
//   var merge = require('easy-pdf-merge');
//    merge(['codef.pdf','code.pdf'],'out.pdf',function(err){


//     if(err)
//     return console.log(err);

//     console.log('Successfully merged!');
// });
// })();