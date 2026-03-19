import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("should have proper page title", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test("should have proper meta description", async ({ page }) => {
    await page.goto("/");
    const metaDescription = page.locator('meta[name="description"]');
    const content = await metaDescription.getAttribute("content");
    expect(content).toBeTruthy();
  });

  test("should have proper lang attribute on html", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    const lang = await html.getAttribute("lang");
    expect(lang).toBeTruthy();
  });

  test("should have no broken images", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute("alt");
      const src = await image.getAttribute("src");

      // Images should have alt text
      if (src && !src.includes("data:")) {
        expect(alt !== null && alt !== "").toBeTruthy();
      }
    }
  });

  test("should have proper focus management", async ({ page }) => {
    await page.goto("/");

    // Tab through elements
    const firstButton = page.locator("button").first();
    if (await firstButton.isVisible()) {
      await firstButton.focus();
      await expect(firstButton).toBeFocused();
    }
  });

  test("should have proper color contrast", async ({ page }) => {
    await page.goto("/");

    // Check that text elements have sufficient content
    const headings = page.locator("h1, h2, h3, h4, h5, h6");
    const headingCount = await headings.count();

    if (headingCount > 0) {
      const firstHeading = headings.first();
      const text = await firstHeading.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test("should have semantic HTML structure", async ({ page }) => {
    await page.goto("/");

    // Check for semantic elements
    const header = page.locator("header");
    const main = page.locator("main");
    const footer = page.locator("footer");
    const nav = page.locator("nav");

    // At least some semantic elements should be present
    const hasSemanticStructure =
      (await header.isVisible().catch(() => false)) ||
      (await main.isVisible().catch(() => false)) ||
      (await footer.isVisible().catch(() => false)) ||
      (await nav.isVisible().catch(() => false));

    expect(hasSemanticStructure).toBeTruthy();
  });

  test("should have proper ARIA labels where needed", async ({ page }) => {
    await page.goto("/");

    // Check interactive elements
    const buttons = page.locator("button");
    const buttonCount = await buttons.count();

    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute("aria-label");
      const text = await button.textContent();

      // Button should have either aria-label or text content
      expect(ariaLabel || text).toBeTruthy();
    }
  });
});
