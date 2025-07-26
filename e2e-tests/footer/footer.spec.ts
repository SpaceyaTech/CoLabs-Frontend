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
    const colabsLogoLink = page.getByRole("link", { name: "Colabs logo" });
    await expect(colabsLogoLink).toBeVisible();

    // Check for X icon link
    const xLink = page.getByRole("link", { name: "X Icon" });
    await expect(xLink).toBeVisible();
    await expect(xLink).toHaveAttribute("target", "_blank");
    const xLinkIcon = xLink.getByRole("img");
    await expect(xLinkIcon).toHaveAttribute("src", /src\/assets\/x-icon.png/);


    // Check for LinkedIn icon link
    const linkedinLink = page.getByRole("link", { name: "Linkedin Icon" });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute("target", "_blank");
    const linkedinLinkIcon = linkedinLink.getByRole("img");
    await expect(linkedinLinkIcon).toHaveAttribute("src", /linkedin-icon\.png/);
  });

  test("should render internal links with correct routes", async ({ page }) => {
    // Check internal navigation links
    const aboutLink = page.getByRole("link", { name: "About" });
    const hackathonsLink = page.getByRole("link", { name: "Hackathons" });
    const leaderboardLink = page.getByRole("link", { name: "Leaderboard" });
    const privacyLink = page.getByRole("link", { name: "Privacy & Terms" });
    const cookiesLink = page.getByRole("link", { name: "Cookies" });


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
    const copyrightNotice = page.locator('[data-test="FooterCopyright"]')
    
    await expect(copyrightNotice).toBeVisible();
  });
});
