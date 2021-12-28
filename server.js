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
    const username = "gmail.com";
    const password = "password";
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
