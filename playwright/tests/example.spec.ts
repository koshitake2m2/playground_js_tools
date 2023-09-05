import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:4200/examples/examples001/login-form");
  await expect(page).toHaveTitle(/MyFirstProject/);
});
