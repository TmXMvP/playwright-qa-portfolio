import { Page, Locator, expect } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly productsHeader: Locator;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.productsHeader = page.getByText('Products');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartItem = page.locator('.inventory_item_name');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string = 'standard_user', password: string = 'secret_sauce') {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async addFirstItemToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async verifyLoginSuccess() {
    await expect(this.productsHeader).toBeVisible();
  }

  async verifyItemInCart(itemName: string) {
    await expect(this.cartItem).toHaveText(itemName);
  }
}
