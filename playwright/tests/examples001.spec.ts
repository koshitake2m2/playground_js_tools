import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("http://localhost:4200/examples/examples001/login-form");
    await expect(page).toHaveTitle(/MyFirstProject/);
});

test("login", async ({ page }) => {
    await page.goto("http://localhost:4200/examples/examples001/login-form");
    await page.getByTestId("email-input").fill("admin@example.com");
    await page.getByTestId("password-input").fill("pass");
    await page.getByTestId("login-button").click();

    expect(page.url()).toBe(
        "http://localhost:4200/examples/examples001/loggedin-home"
    );
});
