import { test, expect } from "@playwright/test";

test.describe("Footer Component", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Footer is rendered
    await page.goto("/");
  });

  test("should render the Footer component", async ({ page }) => {
    const footer = await page.locator('[data-test="Footer"]');
    await expect(footer).toBeVisible();
  });

  test("should render social media icons with correct links", async ({
    page,
  }) => {
    // Check for Colabs logo link
    const colabsLogoLink = page.locator('img[alt="Colabs logo"]');
    await expect(colabsLogoLink).toBeVisible();

    // Check for X icon link
    const xIconLink = page.locator('img[alt="X Icon"]');
    await expect(xIconLink).toBeVisible();
    await expect(xIconLink).toHaveAttribute("src", /x-icon\.png/);
    const xLink = page.locator('a[href="http://www.x.com"]');
    await expect(xLink).toHaveAttribute("target", "_blank");

    // Check for LinkedIn icon link
    const linkedinIconLink = page.locator('img[alt="Linkedin Icon"]');
    await expect(linkedinIconLink).toBeVisible();
    await expect(linkedinIconLink).toHaveAttribute("src", /linkedin-icon\.png/);
    const linkedinLink = page.locator('a[href="http://www.linkedin.com"]');
    await expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  test("should render internal links with correct routes", async ({ page }) => {
    // Check internal navigation links
    const aboutLink = page.locator("text=About");
    const hackathonsLink = page.locator("text=Hackathons");
    const leaderboardLink = page.locator("text=Leaderboard");
    const privacyLink = page.locator("text=Privacy & Terms");
    const cookiesLink = page.locator("text=Cookies");

    // Assert visibility of links
    await expect(aboutLink).toBeVisible();
    await expect(hackathonsLink).toBeVisible();
    await expect(leaderboardLink).toBeVisible();
    await expect(privacyLink).toBeVisible();
    await expect(cookiesLink).toBeVisible();

    // Assert href attributes for navigation links
    await expect(aboutLink).toHaveAttribute("href", "/");
    await expect(hackathonsLink).toHaveAttribute(
      "href",
      "/dashboard/hackathons",
    );
    await expect(leaderboardLink).toHaveAttribute(
      "href",
      "/dashboard/leaderboards",
    );
    await expect(privacyLink).toHaveAttribute("href", "/");
    await expect(cookiesLink).toHaveAttribute("href", "/");
  });

  test("should render copyright notice", async ({ page }) => {
    const copyrightNotice = page.locator(
      "text=© 2024 Colabs by SpaceYaTech. All rights reserved.",
    );
    await expect(copyrightNotice).toBeVisible();
  });
});
