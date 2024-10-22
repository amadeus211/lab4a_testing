const { test, expect } = require('@playwright/test');

test('Реєстрація з вже використаною електронною поштою', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page).toHaveTitle(/Automation Exercise/);

  await page.click('a[href="/login"]');

  const signupHeader = await page.locator('h2:has-text("New User Signup!")');
  await expect(signupHeader).toBeVisible();

  await page.fill('input[data-qa="signup-name"]', 'Sasha');
  await page.fill('input[data-qa="signup-email"]', 'malyuk2004@gmail.com');

  await page.click('button[data-qa="signup-button"]');

  const errorMessage = await page.locator('p:has-text("Email Address already exist!")');
  await expect(errorMessage).toBeVisible();
});
