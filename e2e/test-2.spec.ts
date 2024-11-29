import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Bröd & Kakor' }).click();
  await page.getByRole('link', { name: 'Fastfoodbröd' }).click();
  await page.getByRole('heading', { name: 'Hamburgerbröd Brioche 4-pack' }).click();
  await page.getByRole('link', { name: 'Fisk & Skaldjur' }).click();
  await page.getByText('Fisk+').click();
  await page.getByRole('link', { name: 'Kyld fisk' }).click();
  await page.getByRole('heading', { name: 'Torskfilé Skinn O Benfri' }).click();
});