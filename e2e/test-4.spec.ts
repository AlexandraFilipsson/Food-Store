import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Hälsa & Skönhet' }).click();
  await page.getByRole('link', { name: 'Munvård' }).click();
  await page.getByRole('link', { name: 'Tandkräm' }).click();
  await page.getByRole('heading', { name: 'Sensation White Tandkräm' }).click();
  await page.getByRole('link', { name: 'Djur', exact: true }).click();
  await page.getByRole('link', { name: 'Hund' }).click();
  await page.getByRole('heading', { name: 'Hundpåse i Pappersbanderoll' }).click();
  await page.getByRole('link', { name: 'Hundmat torr' }).click();
  await page.getByRole('heading', { name: 'Oxe Helfoder Säck' }).click();
  await page.getByRole('link', { name: 'Tobak' }).click();
  await page.getByRole('link', { name: 'Cigaretter' }).click();
  await page.locator('div').filter({ hasText: /^Level Red Cigaretter725,00 kr$/ }).getByRole('heading').click();
  await page.getByRole('link', { name: 'Cigarrer & Cigariller' }).click();
  await page.getByRole('heading', { name: 'Signature Finos Swirl Filter' }).click();
  await page.getByRole('link', { name: 'Nikotinfritt' }).click();
  await page.locator('div').filter({ hasText: /^Pepparmint White Portionssnus399,00 kr$/ }).getByRole('heading').click();
});