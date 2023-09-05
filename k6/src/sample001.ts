import { browser } from "k6/experimental/browser";
import { check } from "k6";
import { Options } from "k6/options";

export const options: Options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export default async function () {
  const page = browser.newPage();

  try {
    await page.goto("http://localhost:4200/examples/examples001/login-form");
  } finally {
    page.close();
  }
}
