let password="";

// node filename "mail id " "maid id "

let linkToResume = "https://drive.google.com/file/d/1rMbQmUKGoJ-wPNdCPdKlwclEvj_UrkBF/view";
let puppeteerExtra=require('puppeteer-extra');
let stealthPlugin  =require('puppeteer-extra-plugin-stealth');
let puppeteer= require('puppeteer');
// let dotenv=  require('dotenv');
let sender="vivekgupta6534294@gmail.com";
// let to="lakhangupta6534294@gmail.com"
let to=process.argv.slice(2);
puppeteerExtra.use(stealthPlugin());
// dotenv.config();
(async function(){
  let browser= await puppeteerExtra.launch({headless: false ,  defaultViewport: null,args: ['--start-fullscreen']});
  let page=await browser.newPage();
  await page.goto("https://mail.google.com/");
  await waitandclick('[autocomplete="username"]',page);
  await page.type('[autocomplete="username"]',sender);
  await page.click("#identifierNext");
  await page.waitForTimeout(1500);
  await page.type('[type="password"]', password);
  await page.click("#passwordNext");
  await waitandclick(".T-I.T-I-KE.L3",page);
  // await page.waitFor(7000);
  // await page.keyboard.press('Escape');
  // await page.waitFor(2000);
  //To 
  await page.waitForSelector('[name="to"]');
  await page.click('[name="to"]');
  //Subject   
  for(let i=0;i<to.length;i++){
    await page.type('[name="to"]',to);
    await page.keyboard.press("Enter");
    
  }

  let abc="harkesh";
  console.log(`my name is ${abc}`);
  // await page.type('[name="to"]',to);
  //Body 
  await page.type('input[name="subjectbox"]',  "Hello This is Vivek");
  await page.type('.Am.Al.editable.LW-avf.tS-tW', ` Hello Sir , this is Vivek
                                                    Resume - ${linkToResume}`);

  // Send Button Click
  // await page.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3");


  // Rough
            //   await page.click('[name="to"]');
            //   const pages = await browser.pages();
          //   console.log(pages.length);  
            
          //   let len= await page.evaluate( function(page){
          //       let tab=document.querySelectorAll('[name="to"]');
                
          //       tab[0].click();
          //       return tab.length;
          // })



  
})();
async function waitandclick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
    
}