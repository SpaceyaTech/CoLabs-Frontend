import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
page.getByText("Post a project johndoea@b.com");
});
