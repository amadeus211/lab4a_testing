const { test, expect } = require('@playwright/test');

test('Написання відгуку про товар та отримання повідомлення про успішну відправку', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await page.click('a:has-text("Products")');

  const allProductsHeader = await page.locator('h2:has-text("All Products")');
  await expect(allProductsHeader).toBeVisible();

  await page.click('a:has-text("View Product")'); 

  const reviewHeader = await page.locator('.category-tab .active a:has-text("Write Your Review")');
  await expect(reviewHeader).toBeVisible();

  await page.fill('input[id="name"]', 'Sasha');
  await page.fill('input[id="email"]', 'malyuk2004@gmail.com');
  await page.fill('textarea[id="review"]', 'Товар 10/10.');

  await page.click('button:has-text("Submit")');

  const successMessage = await page.locator('.form-row .alert-success span:has-text("Thank you for your review.")');
  await expect(successMessage).toBeVisible();
});
