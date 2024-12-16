import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Tobak' }).click();
  await page.getByRole('link', { name: 'Cigaretter' }).click();
  await page.locator('div').filter({ hasText: /^Level Red Cigaretter725,00 kr$/ }).getByRole('heading').click();
  await page.getByRole('link', { name: 'Snus' }).click();
  await page.locator('div').filter({ hasText: /^Lös Snus455,00 kr$/ }).getByRole('heading').click();
});