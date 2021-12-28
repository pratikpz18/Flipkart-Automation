const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
// const chrome = require('selenium-webdriver/chrome');

let driver = new Builder().forBrowser("chrome").build();
// let actions = new Builder().actions();

async function example(){
 try{
  var searchString = "Flipkart";

  //To wait for browser to build and launch properly

  await driver.manage().window().maximize();

  //To fetch http://google.com from the browser with our code.
  await driver.get("http://google.com");
      
  //To send a search query by passing the value in searchString.
  await driver.findElement(By.name("q")).sendKeys(searchString,Key.ENTER);

  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log('Title is:',title);

  
  await driver.sleep(1000); 
  
  await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div[1]/a/h3')).click();

  await driver.sleep(1000); 

  await loginlogoutFlipkart();

  //It is always a safe practice to quit the browser after execution
  await driver.quit();

  // For Chrome, you need to add --ignore-certificate-errors and --ignore-ssl-errors ChromeOptions() argument:
  //for command line err
 }catch(err){
   console.log("end browser",err);
 }

}

example();

async function loginlogoutFlipkart(){
  try{
    const username = "zinjurdepratik.pz@gmail.com";
    const password = "Pratik@18";
    await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys(username,Key.ENTER);
    await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[2]/input")).sendKeys(password,Key.ENTER);

    await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[4]/button")).click();

    await driver.sleep(2000); 
    
    let element = driver.findElement(By.xpath("/html/body/div/div/div[1]/div[1]/div[2]/div[3]/div/div"));

    await driver.actions().move({ origin: element }).perform(); //for hovering action

    await driver.sleep(1000); 

    await driver.findElement(By.xpath("/html/body/div/div/div[1]/div[1]/div[2]/div[3]/div/div/div[2]/div[2]/div/ul/li[10]")).click();

    await driver.sleep(2000); 
  }catch(err){
    console.log("err ->",err);
  }
}






// var express = require('express');
// const exec = require('child_process').exec;
// const child_process = require('child_process');
// var app = express();
// var fs = require('fs');
// var config = {
//   "chrome": {
//     "pid": null
//   }
// };

// app.get('/start', function (req, res) {

//   if (req.query.browser == 'chrome') {
//     //let config = JSON.parse(fs.readFileSync('config.json'));
//     const child = exec('chromium-browser --user-data-dir=/tmp/BrowserStack/Chrome ' + req.query.url,
//       (error, stdout, stderr) => {
//         /*console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         if (error !== null) {
//           console.log(`exec error: ${error}`);
//         }*/
//       });
//     console.log(child);
//     config.chrome = child;
//     //fs.writeFileSync('config.json', JSON.stringify(config));
//     res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.pid);
//   } else {
//     // /home/manish/.mozilla/firefox/5kwfs1ex.BrowserStack/prefs.js
//     // firefox -CreateProfile "BrowserStack"
//     const child = exec('firefox -P "BrowserStack" ' + req.query.url,
//       (error, stdout, stderr) => {
//         /*console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         if (error !== null) {
//           console.log(`exec error: ${error}`);
//         }*/
//       });
//     console.log(child);
//     config.chrome = child;
//     //fs.writeFileSync('config.json', JSON.stringify(config));
//     res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.pid);
//   }
// });

// app.get('/stop', function (req, res) {
//   if (req.query.browser == 'chrome') {
//     //let config = JSON.parse(fs.readFileSync('config.json'));
//     const child = exec('sudo kill ' + config.chrome.pid,
//       (error, stdout, stderr) => {
//         /*console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         if (error !== null) {
//           console.log(`exec error: ${error}`);
//         }*/
//       });
//     //config.chrome.kill();
//     //child_process.kill(config.chrome);
//     //config.chrome.kill("SIGINT");
//     res.send('ProcessID: ' + config.chrome.pid + ' killed.');
//     config.chrome.pid = null;
//     //fs.writeFileSync('config.json', JSON.stringify(config));
//     res.send(req.query.url + ' opened in ' + req.query.browser + '\n ProcessID: ' + child.id);
//   }
// });

// app.get('/geturl', function (req, res){
//   console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
//   res.send(req.query.url);
//   console.log(req.query.url)
// });


// app.get('/cleanup', function (req, res){
//   const proc = exec('chromium-browser --user-data-dir=/tmp/BrowserStack/Chrome ' + req.query.url,
//       (error, stdout, stderr) => {
//         /*console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         if (error !== null) {
//           console.log(`exec error: ${error}`);
//         }*/
//       });
//   proc.kill('SIGINT');
//   res.send('process cleanup');
//   console.log('process cleanup');
//   process.exit(0);
// });

// app.listen(3001);
// console.log('Listening on port 3001...');






