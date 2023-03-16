import { test, expect } from "@playwright/test";

test("sign", async ({ page }, config) => {
  await page.goto(
    "https://staging.scrive.com/s/9221714692412866473/9221932570717213245/68d1405c48c2acef"
  );
  await page.waitForLoadState("load");
  await expect(page.locator("select[class^=dropdown]")).toHaveValue("en");
  await expect(page).toHaveScreenshot(`sign.png`, {
    ...config,
    fullPage: true,
  });
});
