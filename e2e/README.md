# E2E Testing with Playwright

This directory contains end-to-end tests for the Sentinel Sim application using Playwright.

## Setup

The custom Playwright configuration has been set up to work with your Vite development server.

### Configuration

- **Base URL**: `http://localhost:5173` (your Vite dev server)
- **Test Directory**: `./e2e`
- **Browsers**: Chromium, Firefox, WebKit
- **Reporter**: HTML report (generated after test runs)

## Running Tests

### Run all tests
```bash
npm run test:e2e
```

### Run tests with UI (interactive mode)
```bash
npm run test:e2e:ui
```

### Run tests in debug mode
```bash
npm run test:e2e:debug
```

### Run specific test file
```bash
npx playwright test e2e/navigation.spec.ts
```

### Run tests with specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Files

- **navigation.spec.ts** - Tests for navigation between pages
- **products.spec.ts** - Tests for products page functionality
- **industries.spec.ts** - Tests for industries page
- **contact.spec.ts** - Tests for contact form validation and submission
- **ui-components.spec.ts** - Tests for UI component functionality and responsiveness
- **accessibility.spec.ts** - Tests for accessibility standards
- **cross-browser.spec.ts** - Tests for cross-browser compatibility

## Test Results

After running tests, an HTML report is generated at:
```
playwright-report/index.html
```

Open this file in your browser to see detailed test results with screenshots and videos.

## Writing New Tests

Follow this pattern:

```typescript
import { test, expect } from "@playwright/test";

test.describe("Feature Name", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/path");
  });

  test("should do something", async ({ page }) => {
    await expect(page).toHaveURL(/.*path/i);
    // Add your test steps here
  });
});
```

## Fixtures

Custom fixtures are defined in `playwright-fixture.ts`. You can extend these fixtures for your specific needs (e.g., authentication, database setup).

## Tips

1. **Wait for elements**: Use `await page.waitForLoadState("networkidle")` for network-based waits
2. **Test data**: Use `data-testid` attributes in your components for reliable element selection
3. **Screenshots**: Use `await page.screenshot()` to capture screenshots on failure
4. **Debugging**: Use `await page.pause()` in tests to pause execution and inspect state

## CI/CD Integration

The tests are configured to run on CI with:
- 2 retries on failure
- 1 worker (sequential execution)
- Screenshots on failure

To use in CI, ensure your dev server is running or the tests will start it automatically.
