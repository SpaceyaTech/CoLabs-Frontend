import { test, expect } from "@playwright/test";


test("has title", async ({ page }) => {
  await page.goto("/dashboard");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard/);
});

test("has-navbar", async ({ page }) => {
  await page.goto("/dashboard");
  // await expect(page)
});
