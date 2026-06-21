import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/saucedemo.page';

test.describe('SauceDemo Full Flow Tests', () => {

  test('Should complete checkout successfully', async ({ page }) => {
    const sauceDemo = new SauceDemoPage(page);

    await sauceDemo.goto();
    await sauceDemo.login();
    await sauceDemo.verifyLoginSuccess();

    // Add item
    await sauceDemo.addFirstItemToCart();
    await sauceDemo.goToCart();

    // Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.getByRole('button', { name: 'Finish' }).click();

    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();

    console.log('✅ Full checkout flow passed!');
  });

  test('Should show error with invalid login', async ({ page }) => {
    const sauceDemo = new SauceDemoPage(page);
    
    await sauceDemo.goto();
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'Epic sadface:' })).toBeVisible();

    console.log('✅ Invalid login test passed!');
  });

});
