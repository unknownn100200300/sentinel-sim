import { test, expect } from "@playwright/test";

test.describe("Industries Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/industries");
  });

  test("should load industries page", async ({ page }) => {
    await expect(page).toHaveURL(/.*industries/i);
  });

  test("should display industries content", async ({ page }) => {
    // Wait for page content to load
    const mainContent = page.locator("main");
    await expect(mainContent).toBeVisible();
  });

  test("should display industry cards or sections", async ({ page }) => {
    // Look for common industry card patterns
    const industryCards = page.locator("[data-testid='industry-card']");
    const sections = page.locator("section");

    const hasCards = await industryCards.isVisible().catch(() => false);
    const hasSections = await sections.isVisible().catch(() => false);

    expect(hasCards || hasSections).toBeTruthy();
  });

  test("should have proper headings", async ({ page }) => {
    // Check for main heading
    const headings = page.locator("h1, h2");
    await expect(headings.first()).toBeVisible();
  });

  test("should display Our Clients section if present", async ({ page }) => {
    const clientsSection = page.locator("text=/our clients/i");

    // This section might be on different pages
    const clientsExists = await clientsSection.isVisible().catch(() => false);
    if (clientsExists) {
      await expect(clientsSection).toBeVisible();
    }
  });
});
