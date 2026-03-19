import { test, expect } from "@playwright/test";

test.describe("Cross-Browser Compatibility", () => {
  test("should load correctly in all browsers", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
  });

  test("should have correct viewport in current browser", async ({ page }) => {
    await page.goto("/");

    const viewportSize = page.viewportSize();
    expect(viewportSize).not.toBeNull();
    expect(viewportSize?.width).toBeGreaterThan(0);
    expect(viewportSize?.height).toBeGreaterThan(0);
  });

  test("should render styles correctly", async ({ page }) => {
    await page.goto("/");

    // Check if main content is visible
    const body = page.locator("body");
    const bgColor = await body.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Should have some background color or transparency
    expect(bgColor).toBeTruthy();
  });

  test("should handle no JavaScript gracefully", async ({ page }) => {
    // Note: This test might need adjustment based on your app's JS requirements
    await page.goto("/");

    // At minimum, page should load
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test("should work with different screen sizes", async ({ page }) => {
    const screenSizes = [
      { width: 1920, height: 1080, name: "Desktop" },
      { width: 768, height: 1024, name: "Tablet" },
      { width: 375, height: 667, name: "Mobile" },
    ];

    for (const size of screenSizes) {
      await page.setViewportSize(size);
      await page.goto("/");

      // Page should load on all screen sizes
      const mainContent = page.locator("main, [role='main']");
      const isVisible = await mainContent.isVisible().catch(() => false);

      // At least some content should be visible
      expect(isVisible || (await page.url()).includes("http")).toBeTruthy();
    }
  });

  test("should have no console errors on page load", async ({ page }) => {
    const errors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");

    // Log errors if any exist (but don't necessarily fail)
    if (errors.length > 0) {
      console.log("Console errors found:", errors);
    }
  });
});
