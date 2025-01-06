import { test, expect } from "@playwright/test";

import { projects } from "../src/data/projects";

test.describe("Repositories Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("should render the section heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Access the largest directory of open-source projects",
      }),
    ).toBeVisible();
  });

  test("should render the search input", async ({ page }) => {
    await expect(page.locator('[data-testid="project-search"]')).toBeVisible();
  });

  test("should render filter tags", async ({ page }) => {
    const filterLangs = [
      "All",
      ...new Set(projects.flatMap((p) => p.languages)),
    ];
    for (const lang of filterLangs) {
      const filterButton = await page.locator(
        `[data-testid="btn-filter-${lang}"]`,
      );
      await expect(filterButton).toBeVisible();
    }
  });

  test("should render the provided projects", async ({ page }) => {
    for (const project of projects) {
      await expect(page.locator(`text=${project.repository}`)).toBeVisible();
      await expect(page.locator(`text=${project.description}`)).toBeVisible();
    }
  });

  test("renders 'Learn more' links correctly", async ({ page }) => {
    const learnMoreLinks = await page.locator(
      '[data-testid="learn-more-link"]',
    );

    for (const [index, project] of projects.entries()) {
      await expect(learnMoreLinks.nth(index)).toHaveAttribute(
        "href",
        project.link,
      );
    }
  });

  test("filters projects by search term", async ({ page }) => {
    await page.locator('[data-testid="project-search"]').fill("playwright");

    await expect(page.locator("text=microsoft/playwright")).toBeVisible();
    await expect(page.locator("text=facebook/react")).not.toBeVisible();
    await expect(page.locator("text=remix-run/remix")).not.toBeVisible();
  });

  test("shows no results when no projects match the search term", async ({
    page,
  }) => {
    await page
      .locator('[data-testid="project-search"]')
      .fill("NonExistentProject");

    for (const project of projects) {
      await expect(
        page.locator(`text=${project.repository}`),
      ).not.toBeVisible();
    }
  });

  test("resets filtered projects when the search input is cleared", async ({
    page,
  }) => {
    const searchInput = await page.locator('[data-testid="project-search"]');
    await searchInput.fill("playwright");

    await expect(page.locator("text=microsoft/playwright")).toBeVisible();
    await expect(page.locator("text=facebook/react")).not.toBeVisible();

    await searchInput.fill("");
    for (const project of projects) {
      await expect(page.locator(`text=${project.repository}`)).toBeVisible();
    }
  });

  test("filters projects by selected language", async ({ page }) => {
    await page.locator('[data-testid="btn-filter-Rust"]').click();

    await expect(page.locator("text=prisma/prisma")).toBeVisible();
    await expect(page.locator("text=nestjs/nest")).not.toBeVisible();
    await expect(page.locator("text=facebook/react")).not.toBeVisible();
  });

  test('resets filter to "All" to show all projects', async ({ page }) => {
    await page.locator('[data-testid="btn-filter-Rust"]').click();

    await page.locator('[data-testid="btn-filter-All"]').click();

    for (const project of projects) {
      await expect(page.locator(`text=${project.repository}`)).toBeVisible();
    }
  });

  test("filters projects by language and search term", async ({ page }) => {
    await page.locator('[data-testid="btn-filter-TypeScript"]').click();

    await page.locator('[data-testid="project-search"]').fill("Nest");

    await expect(page.locator("text=nestjs/nest")).toBeVisible();
    await expect(page.locator("text=facebook/react")).not.toBeVisible();
    await expect(page.locator("text=microsoft/playwright")).not.toBeVisible();
  });
});
