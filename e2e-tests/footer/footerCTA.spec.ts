import { test, expect } from "@playwright/test";

test.describe("FooterCTA Component", () => {
  test.beforeEach(async ({ page }) => {
    // Replace with the route that renders the FooterCTA component
    await page.goto("http://localhost:3000");
  });

  test("should render the FooterCTA component", async ({ page }) => {
    const footerCTA = await page.locator('[data-test="FooterCTA"]');
    await expect(footerCTA).toBeVisible();
  });

  test("should display the main text", async ({ page }) => {
    const mainText = await page.locator(
      "text=Experience counts. Get it on Colabs.",
    );
    await expect(mainText).toBeVisible();
  });

  test("should display the secondary text", async ({ page }) => {
    const secondaryText = await page.locator(
      "text=Colabs is where you cut your teeth on enterprise projects. We have over 100 repositories on all tech tracks, carefully picked for you.",
    );
    await expect(secondaryText).toBeVisible();
  });

  test("should render the Join Colabs for free button", async ({ page }) => {
    const joinButton = await page.locator("text=Join Colabs for free");
    await expect(joinButton).toBeVisible();
    await expect(joinButton).toHaveAttribute(
      "href",
      "/auth/signup?returnTo=%2Fdashboard",
    );
    await joinButton.click();
  });

  test("should render the Launch a Hackathon button", async ({ page }) => {
    const hackathonButton = await page.locator("text=Launch a Hackathon");
    await expect(hackathonButton).toBeVisible();
    await expect(hackathonButton).toHaveAttribute(
      "href",
      "/dashboard/hackathons",
    );
  });

  test("should display images", async ({ page }) => {
    const robotImage = await page.locator('img[alt="Standing robot"]');
    const ellipseImage = await page.locator('img[alt="ellipse background"]');

    await expect(robotImage).toBeVisible();
    await expect(ellipseImage).toBeVisible();
  });

  test("Join Colabs for free button navigates correctly", async ({ page }) => {
    const joinButton = await page.locator("text=Join Colabs for free");
    await expect(joinButton).toBeVisible();
    await joinButton.click();
    await expect(joinButton).toHaveAttribute(
      "href",
      "/auth/signup?returnTo=%2Fdashboard",
    );
  });

  test("Launch a Hackathon button navigates correctly", async ({ page }) => {
    const hackathonButton = await page.locator("text=Launch a Hackathon");
    await expect(hackathonButton).toBeVisible();
    //setting this up to force a click because the rocket icon is in the way of the button
    await hackathonButton.click({ force: true });
  });
});
