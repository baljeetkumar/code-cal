const puppeteer = require('puppeteer');
const hackerearth =require('./hackerearth');
const codeforces =require('./codeforces');
const codechef =require('./codechef');
const hackerrank =require('./hackerrank');
const interviewbit =require('./interviewbit');


  (async () => {
  
   
    
    await hackerearth.initialize();

    await hackerearth.fun();

    await codeforces.initialize();

    await codeforces.fun();

    await codechef.initialize();

    await codechef.fun();

    await hackerrank.initialize();

    await hackerrank.fun();

    await interviewbit.initialize();

    await interviewbit.fun();


  })();
