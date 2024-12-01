import { test, expect, Locator } from "@playwright/test";
async function checkDashboardSectionElements(section: Locator) {
  // section has a search bar
  await expect(
    section.locator('[data-test="DashboardLayoutSearchbar"]'),
  ).toBeVisible();
  // section has a post project button
  await expect(
    section.locator('[data-test="DashboardpostProjectButton"]'),
  ).toBeVisible();
  // section has a user dropdown
  await expect(
    section.locator('[data-test="DashboardUserDropdown"]'),
  ).toBeVisible();
}

test("test dashboard header", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page).toHaveTitle(/Dashboard/);
  const desktopSection = await page.locator(
    '[data-test="DashboardLayoutHeaderDesktop"]',
  );
  const mobileSection = await page.locator(
    '[data-test="DashboardLayoutHeaderMobile"]',
  );
  // desktop section is visible and mobile is not
  await expect(desktopSection).toBeVisible();
  await expect(mobileSection).not.toBeVisible();
  // section has a logo
  // on mobile the logo section will be hidden and only shown in the sidebar
  await expect(
    desktopSection.locator('[data-test="DashboardLayoutHeaderLogo"]'),
  ).toBeVisible();
  // check the section contains the expected elements
  await checkDashboardSectionElements(desktopSection);
  // mobile section is not visible

  // resize the viewport to mobile
  await page.setViewportSize({ width: 400, height: 1000 });
  // monile section is visible and desktop is not
  await expect(mobileSection).toBeVisible();
  await expect(desktopSection).not.toBeVisible();
  // check the section contains the expected elements
  await checkDashboardSectionElements(mobileSection);
});
