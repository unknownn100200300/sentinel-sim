import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load home page", async ({ page }) => {
    await expect(page).toHaveTitle(/Sentinel|ARI/i);
    await expect(page).toHaveURL("/");
  });

  test("should navigate to Products page", async ({ page }) => {
    const productsLink = page.locator("a:has-text('Products')").first();
    await productsLink.click();
    await expect(page).toHaveURL(/.*products/i);
  });

  test("should navigate to Industries page", async ({ page }) => {
    const industriesLink = page.locator("a:has-text('Industries')").first();
    await industriesLink.click();
    await expect(page).toHaveURL(/.*industries/i);
  });

  test("should navigate to Contact page", async ({ page }) => {
    const contactLink = page.locator("a:has-text('Contact')").first();
    await contactLink.click();
    await expect(page).toHaveURL(/.*contact/i);
  });

  test("should navigate back to home from any page", async ({ page }) => {
    // Navigate to products
    const productsLink = page.locator("a:has-text('Products')").first();
    await productsLink.click();
    await expect(page).toHaveURL(/.*products/i);

    // Navigate back to home
    const homeLink = page.locator("a:has-text('Home')").first();
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await expect(page).toHaveURL("/");
    }
  });

  test("should display navigation menu", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });
});
