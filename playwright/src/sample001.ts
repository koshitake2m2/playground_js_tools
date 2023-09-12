import { BrowserContext, chromium, Page } from "@playwright/test";

const newPage = async (): Promise<Page> => {
    const browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    return page;
};

const main = async (): Promise<void> => {
    const page: Page = await newPage();
    await page.goto("http://localhost:4200/examples/examples001/login-form");

    // 画面内のtestidを全件
    const testids = await page.evaluate(() =>
        Array.from(document.querySelectorAll("[data-testid]")).map(
            (e) => (e as HTMLElement).dataset.testid
        )
    );
    console.log(testids);
};

(async () => {
    main();
})();
