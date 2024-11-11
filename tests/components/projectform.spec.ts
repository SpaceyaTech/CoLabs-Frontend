import { test, expect } from "@playwright/test";

test.describe("Project Form Submission", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5174/"); // Update to match your URL
  });

  test("adds and removes tech stack tags", async ({ page }) => {
    // Add a tech stack tag
    await page.fill("#whatIsYourTechStack", "React");
    await page.keyboard.press(" ");
    const reactTag = page.locator("text=React");
    await expect(reactTag).toBeVisible();

    // Remove the tech stack tag
    await reactTag.locator("button").click();
    await expect(reactTag).not.toBeVisible();
  });
});
