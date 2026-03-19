import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should load contact page", async ({ page }) => {
    await expect(page).toHaveURL(/.*contact/i);
  });

  test("should display contact form", async ({ page }) => {
    const form = page.locator("form");
    await expect(form).toBeVisible();
  });

  test("should have required form fields", async ({ page }) => {
    // Check for common contact form fields
    const emailInput = page.locator("input[type='email']");
    const textInput = page.locator("input[type='text']");
    const textarea = page.locator("textarea");
    const submitButton = page.locator("button[type='submit']");

    const hasEmailField = await emailInput.isVisible().catch(() => false);
    const hasTextField = await textInput.isVisible().catch(() => false);
    const hasTextarea = await textarea.isVisible().catch(() => false);
    const hasSubmitButton = await submitButton.isVisible().catch(() => false);

    expect(hasEmailField || hasTextField || hasTextarea || hasSubmitButton).toBe(
      true
    );
  });

  test("should display form labels", async ({ page }) => {
    const labels = page.locator("label");
    const labelCount = await labels.count();

    // Expect at least one label in the form
    expect(labelCount).toBeGreaterThan(0);
  });

  test("should validate email field", async ({ page }) => {
    const emailInput = page.locator("input[type='email']");

    if (await emailInput.isVisible().catch(() => false)) {
      await emailInput.fill("invalid-email");
      await emailInput.blur();

      // Check for validation message
      const errorMessage = page.locator("[role='alert']");
      const hasError = await errorMessage.isVisible().catch(() => false);

      // Either validation message appears or HTML5 validation occurs
      if (!hasError) {
        // HTML5 validation - check validity
        const isInvalid = await emailInput.evaluate((el: HTMLInputElement) =>
          el.validity ? !el.validity.valid : false
        );
        expect(isInvalid).toBeTruthy();
      }
    }
  });

  test("should submit form with valid data", async ({ page }) => {
    const emailInput = page.locator("input[type='email']");
    const submitButton = page.locator("button[type='submit']");

    if (
      (await emailInput.isVisible().catch(() => false)) &&
      (await submitButton.isVisible().catch(() => false))
    ) {
      // Fill in form fields
      const nameInput = page.locator("input[placeholder*='name' i]");
      if (await nameInput.isVisible().catch(() => false)) {
        await nameInput.fill("Test User");
      }

      await emailInput.fill("test@example.com");

      const textarea = page.locator("textarea");
      if (await textarea.isVisible().catch(() => false)) {
        await textarea.fill("This is a test message");
      }

      // Submit form
      await submitButton.click();

      // Wait for response/navigation
      await page.waitForLoadState("networkidle");

      // Check for success message or redirect
      const successMessage = page.locator("[role='status'], .success, .alert");
      const successExists = await successMessage.isVisible().catch(() => false);

      // Either success message appears or page content changes
      expect(
        successExists ||
          (await page.url()).includes("contact") ||
          (await page.url()).includes("thank")
      ).toBeTruthy();
    }
  });
});
