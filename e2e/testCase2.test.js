const { test, expect } = require('@playwright/test');

test('Вхід в акаунт та подальше видалення', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  
  await expect(page).toHaveTitle(/Automation Exercise/);
  
  await page.click('a[href="/login"]');

  const loginHeader = await page.locator('h2:has-text("Login to your account")');
  await expect(loginHeader).toBeVisible();
  
  await page.fill('input[data-qa="login-email"]', 'malyuk2004@gmail.com');
  await page.fill('input[data-qa="login-password"]', '21012004'); 
  
  await page.click('button[data-qa="login-button"]');
  
  const loggedInText = await page.locator('a:has-text("Logged in as Sasha")');
  await expect(loggedInText).toBeVisible();
  
  // await page.click('a[href="/delete_account"]');
  
  // const accountDeletedText = await page.locator('h2:has-text("ACCOUNT DELETED!")');
  // await expect(accountDeletedText).toBeVisible();
  
});
