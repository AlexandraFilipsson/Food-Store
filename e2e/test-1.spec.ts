import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4000/kategori/frukt-och-gront');
  await page.getByRole('heading', { name: 'Apelsin Klass' }).click();
  await page.getByRole('link', { name: 'Blommor & trädgård' }).click();
  await page.getByText('Blommor & trädgård-Blommor+').click();
  await page.getByRole('link', { name: 'Jord' }).click();
  await page.getByText('Lecakulor41,90 kr').click();
});