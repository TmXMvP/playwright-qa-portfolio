import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/saucedemo.page';

test('Login to Saucedemo and Add to Cart - POM Version', async ({ page }) => {
  const sauceDemo = new SauceDemoPage(page);

  await sauceDemo.goto();
  await sauceDemo.login();
  await sauceDemo.verifyLoginSuccess();
  
  await sauceDemo.addFirstItemToCart();
  await sauceDemo.goToCart();
  await sauceDemo.verifyItemInCart('Sauce Labs Backpack');

  console.log('✅ Professional POM test passed!');
});