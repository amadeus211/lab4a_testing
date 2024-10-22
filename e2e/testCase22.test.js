const { test, expect } = require('@playwright/test');

test('Додавання товару до кошику та перевірка кошику на наявність цього продукту', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const recommendedItemsSection = await page.locator('h2:has-text("recommended items")');
  await expect(recommendedItemsSection).toBeVisible();

  const productContainer = await page.locator('#recommended-item-carousel .active.left .productinfo:has(p:has-text("Men Tshirt"))');
  await productContainer.locator('a:has-text("Add to cart")').click();

  await page.click('a:has-text("View Cart")');

  const cartProduct = await page.locator('.table-responsive .cart_description:has(a:has-text("Men Tshirt"))');
  await expect(cartProduct).toBeVisible();
});
