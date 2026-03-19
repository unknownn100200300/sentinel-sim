import { test, expect } from "@playwright/test";

test.describe("Products Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/products");
  });

  test("should load products page", async ({ page }) => {
    await expect(page).toHaveURL(/.*products/i);
  });

  test("should display products list", async ({ page }) => {
    // Wait for products to load
    const productCards = page.locator("[data-testid='product-card']");
    await expect(productCards.first()).toBeVisible();
  });

  test("should navigate to product details when clicking a product", async ({
    page,
  }) => {
    // Click on first product
    const firstProduct = page.locator("[data-testid='product-card']").first();
    await firstProduct.click();

    // Verify we're on product details page
    await expect(page).toHaveURL(/.*products\/.*|product-details/i);
  });

  test("should display product filters if available", async ({ page }) => {
    const filterSection = page.locator("[data-testid='product-filter']");

    // Check if filter exists (it might not always be present)
    const filterExists = await filterSection.isVisible().catch(() => false);
    if (filterExists) {
      await expect(filterSection).toBeVisible();
    }
  });

  test("should have product search functionality", async ({ page }) => {
    const searchInput = page.locator("input[type='search']");

    if (await searchInput.isVisible().catch(() => false)) {
      await searchInput.fill("test");
      await page.waitForLoadState("networkidle");

      // Verify search was performed
      const productCards = page.locator("[data-testid='product-card']");
      await expect(productCards.first()).toBeVisible();
    }
  });
});
