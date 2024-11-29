import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.locator('div').filter({ hasText: /^Barn\+$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Välling & ersättning' }).click();
  await page.getByRole('link', { name: 'Välling 12 mån' }).click();
  await page.getByRole('link', { name: 'Bad & dusch' }).click();
  await page.getByRole('link', { name: 'Hem & Städ' }).click();
  await page.getByRole('link', { name: 'Grill' }).click();
  await page.getByRole('heading', { name: 'Tändare Bras Och Grill' }).click();
});