import { test, expect } from "@playwright/test";

//Test for the HeroSection component
test.describe("HeroSection Component", () => {
  test.beforeEach(async ({ page }) => {
    //go to the page containing the HeroSection component
    await page.goto("http://localhost:3000");
  });

  test("should render the HeroSection component", async ({ page }) => {
    const heroSection = await page.locator('[data-test="HeroSection"]');
    await expect(heroSection).toBeVisible();
  });

  test("should display the heading ", async ({ page }) => {
    const heading = await page.getByRole("heading", {
      name: "Making open-source contribution fun again",
    });
    await expect(heading).toBeVisible();
  });

  test("should display the description correctly", async ({ page }) => {
    // Locate the description paragraph within the HeroSection
    const description = await page.locator(
      '[data-test="HeroSection"] p.font-ff-inconsolata',
    );

    // Wait for the paragraph to be visible
    await expect(description).toBeVisible();

    // Verify the description text
    await expect(description).toHaveText(
      "Open-source is the fastest way to get the job experience you need. Colabs is the platform that makes open-source contribution fun and competitive.",
    );
  });

  test("should display the collaborator images correctly", async ({ page }) => {
    const collaborators = await page.locator(
      '[data-test="HeroSection"] img[alt="Collaborator"]',
    );

    //check the number of collaborators image displayed
    await expect(collaborators).toHaveCount(4);

    //check that they are all visible
    for (let i = 0; i < 4; i++) {
      const collaborator = collaborators.nth(i);
      await expect(collaborator).toBeVisible();
      await expect(collaborator).toHaveClass(/rounded-full/);
    }
  });

  test("should display the contributor text", async ({ page }) => {
    const contributorText = await page.locator(
      '[data-test="HeroSection"] p.font-text-brand-gray-10',
    );
    await expect(contributorText).toHaveText("500+ contributors and counting");
  });

  test("should render the action buttons correctly", async ({ page }) => {
    // Verify the "Join Colabs" button
    const joinButton = await page.locator(
      "data-test=HeroSection >> text=Join Colabs",
    );
    await expect(joinButton).toBeVisible();
    await expect(joinButton).toHaveAttribute(
      "href",
      "/auth/signup?returnTo=%2Fdashboard",
    );

    // Verify the "Launch a Hackathon" button
    const hackathonButton = await page.locator(
      "data-test=HeroSection >> text=Launch a Hackathon",
    );
    await expect(hackathonButton).toBeVisible();
    await expect(hackathonButton).toHaveAttribute(
      "href",
      "/dashboard/hackathons",
    );
  });

  test("should display the astronaut image", async ({ page }) => {
    // Verify the astronaut image
    const astronautImage = await page.locator(
      '[data-test="HeroSection"] img[alt="Standing robot"]',
    );
    await expect(astronautImage).toBeVisible();
    await expect(astronautImage).toHaveClass(/object-contain/);
  });
});
