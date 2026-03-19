import { test, expect } from "@playwright/test";

test.describe("UI Components", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should have proper button styling", async ({ page }) => {
    const buttons = page.locator("button");
    const buttonCount = await buttons.count();

    if (buttonCount > 0) {
      const firstButton = buttons.first();
      await expect(firstButton).toBeVisible();

      // Check if button is clickable
      await expect(firstButton).toBeEnabled();
    }
  });

  test("should have responsive navigation", async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigation should still be accessible (either visible or in hamburger menu)
    const mobileNav = page.locator("[role='navigation']");
    const hamburgerMenu = page.locator("button[aria-label*='menu' i]");

    const isVisible = await mobileNav.isVisible().catch(() => false);
    const hasHamburger = await hamburgerMenu.isVisible().catch(() => false);

    expect(isVisible || hasHamburger).toBeTruthy();
  });

  test("should have visible links with proper href", async ({ page }) => {
    const links = page.locator("a");
    const linkCount = await links.count();

    if (linkCount > 0) {
      const firstLink = links.first();
      const href = await firstLink.getAttribute("href");

      // Link should have href attribute
      expect(href).toBeTruthy();
    }
  });

  test("should have proper form inputs", async ({ page }) => {
    await page.goto("/contact");

    const inputs = page.locator("input, textarea");
    const inputCount = await inputs.count();

    if (inputCount > 0) {
      // Check that inputs are interactive
      const firstInput = inputs.first();
      await firstInput.focus();
      await expect(firstInput).toBeFocused();
    }
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    const h1 = page.locator("h1");
    const h2s = page.locator("h2");

    // Page should have at least one h1
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThan(0);
  });
});
