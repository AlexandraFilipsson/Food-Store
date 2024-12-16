import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Dryck' }).click();
  await page.getByRole('link', { name: 'Kaffe', exact: true }).click();
  await page.getByRole('heading', { name: 'Supremo 10 Kaffekapslar' }).click();
  await page.getByRole('link', { name: 'Te & choklad' }).click();
  await page.getByRole('heading', { name: 'Mango & Citrus Te' }).click();
  await page.getByRole('link', { name: 'Juice, fruktdryck & smoothie' }).click();
  await page.getByRole('link', { name: 'Kyld fruktdryck', exact: true }).click();
  await page.getByRole('heading', { name: 'Nypon Fruktdryck' }).click();
  await page.getByRole('link', { name: 'Kyld juice & nektar', exact: true }).click();
  await page.getByRole('heading', { name: 'Äpplejuice', exact: true }).click();
  await page.getByRole('link', { name: 'Smoothies' }).click();
  await page.getByRole('heading', { name: 'Banan Jordgubb Havre Smoothie' }).click();
});


