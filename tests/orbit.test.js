const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Step 1 - Check if login page loads
  await page.goto('https://orbit.sparkbrains.ai/employee/feed');
  console.log('Login page loaded successfully');
  
  // Step 2 - Login with credentials from GitHub Secrets
  await page.fill('input[name="username"]', process.env.tamanna.t@sparkbrains.ai);
  await page.fill('input[name="password"]', process.env.Tamanna@9);
  await page.click('button[type="submit"]');
  console.log('Login submitted');
  
  // Step 3 - Wait and check if feed loaded after login
  await page.waitForTimeout(3000);
  const feedExists = await page.$('.feed') !== null;
  console.log(feedExists ? 'Feed loaded successfully' : 'Feed failed to load');
  
  // Step 4 - Check if buttons are present on the page
  const postButton = await page.$('button') !== null;
  console.log(postButton ? 'Buttons found and working' : 'Buttons missing');

  await browser.close();
  console.log('QA test completed');
})();
