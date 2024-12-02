import { test, expect, Locator, Page } from "@playwright/test";
import { dashboard_routes } from "../../src/components/navigation/routes";

async function checkLinkNameAndNavigateToIt(page: Page, locator: Locator,mobile=false) {
  for await (const [index, link] of dashboard_routes.entries()) {
    await expect(await locator.nth(index).textContent()).toBe(link.name);
    await locator.nth(index).click();
    await expect(page).toHaveTitle(`Dashboard - ${link.name}`);
    await page.goBack();
    if(mobile){
      // open the mobile sidebar again
      await page.locator('[data-test="DashboardLayoutSidebarTrigger"]').click();
    }
  }
}

test("test dashboard sidebar", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page).toHaveTitle(/Dashboard/);
  const sidebarTrigger = await page.locator(
    '[data-test="DashboardLayoutSidebarTrigger"]',
  );
  await expect(sidebarTrigger).toBeVisible();
  // sidebar nly shows icons by defalut unti expanded to show text
  const sidebarLinks = await page.locator(
    '[data-test="DashboardSidebarLinks"]',
  );
  // sidebar is visible by default when in dsktop mode
  await expect(sidebarLinks).toBeVisible();
  //   select the first link in the sidebar
  const nestedSidebarLinks = await sidebarLinks.locator(
    '[data-test="DashboardSidebarLink"]',
  );
  await expect(await nestedSidebarLinks.count()).toBe(dashboard_routes.length);
  await expect(nestedSidebarLinks.first()).toBeVisible();
  const sidebarLinkName = await nestedSidebarLinks.locator(
    '[data-test="DashboardSidebarLinkName"]',
  );
  // sidebar link name is not visible by default until sidebar is expanded
  await expect(sidebarLinkName.first()).not.toBeVisible();
  // click the sidebar trigger to expand the sidebar
  await sidebarTrigger.click();
  // sidebar link name is now visible , and clicking should take us to the respective page
  await checkLinkNameAndNavigateToIt(page, sidebarLinkName);
  // click tp minimize the sidebar
  await sidebarTrigger.click();
  await expect(sidebarLinkName.first()).not.toBeVisible();
  // resize to mobile view
  await page.setViewportSize({ width: 400, height: 1000 });
  // sidebar is not visible by default when in mobile view
  await expect(sidebarLinks).not.toBeVisible();
});

test("test mobile dashboard sidebar", async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 1000 });
  await page.goto("/dashboard");
  await expect(page).toHaveTitle(/Dashboard/);
  const sidebarTrigger = await page.locator(
    '[data-test="DashboardLayoutSidebarTrigger"]',
  );
  await sidebarTrigger.click();
  // mobile version of the sidebar is visible
  const mobileSidebar = await page.locator(
    '[data-sidebar="sidebar"][data-mobile="true"]',
  );
  await expect(mobileSidebar).toBeVisible();
  const mobileSidebarLinks = await mobileSidebar.locator(
    '[data-test="DashboardSidebarLink"]',
  );
  await expect(await mobileSidebarLinks.count()).toBe(dashboard_routes.length);
  await checkLinkNameAndNavigateToIt(page, mobileSidebarLinks,true);
});
