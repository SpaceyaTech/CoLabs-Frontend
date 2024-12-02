# Testing

```sh
npm run test
```
will run your unit tests and e2e tests to ensure everything is working correctly.

- [vitest](https://vitest.dev/)
    Unit testing, ideal for functions (components too).

```sh
npm run vitest
```

Ideally, put your unit tests next to your `function.ts(x)` but with `function.test.ts(x)`.

```ts
import { describe, it, expect } from "vitest";
import { add } from "./add";
describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
});
```

Component testing can be done with [react testing library](https://testing-library.com/docs/react-testing-library/intro/) or you could only write e2e tests with Playwright instead to avoid double testing and take advantage of the Playwright tooling like recording of tests and locators.

- [playwright](https://playwright.dev/)
    E2E testing, ideal for UI testing.

```sh
npm run playwright
```

All the tests should be in the `e2e-tests` folder.

```tsx
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
});
```

Add a `data-test` attribute to components you'll query in your tests for more reliable results.

```tsx
// index.page.tsx
function HomePage() {
    return <div data-test="DashboardLayoutHeaderLogo">Colabs</div>;
}
// e2e-tests/homepage/index.spec.ts
import { test, expect } from "@playwright.test";
test("has colabs text", async ({ page }) => {
    await page.goto("/");
    await expect(
        page.locator('[data-test="DashboardLayoutHeaderLogo"]'),
    ).toHaveText("Colabs");
});
```

## Helpful resources
- [Playwright tips](https://youtu.be/ZF1W6FxWOiA?si=AkHqOwLDedPJ3PC6)
- [Advice on what to test](https://youtu.be/4-_0aTlkqK0?si=my5IJnAmtcIOhpX9)
