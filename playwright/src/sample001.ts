import { BrowserContext, chromium, Page } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("http://localhost:4200/examples/examples001/login-form");
})();
