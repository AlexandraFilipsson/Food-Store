module.exports = { myTestFlow };

async function myTestFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  await page.goto('http://127.0.0.1:4000/');
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByRole('link', { name: 'Ost', exact: true }).click();
  await page.getByRole('link', { name: 'Färskost' }).click();

  await page.getByRole('link', { name: 'Bröd & Kakor' }).click();
  await page.getByRole('link', { name: 'Fastfoodbröd' }).click();
  await page.getByRole('heading', { name: 'Hamburgerbröd Brioche 4-pack' }).click();
  await page.getByRole('link', { name: 'Fisk & Skaldjur' }).click();
  await page.getByText('Fisk+').click();
  await page.getByRole('link', { name: 'Kyld fisk' }).click();
  await page.getByRole('heading', { name: 'Torskfilé Skinn O Benfri' }).click();

  await page.locator('div').filter({ hasText: /^Barn\+$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Välling & ersättning' }).click();
  await page.getByRole('link', { name: 'Välling 12 mån' }).click();
  await page.getByRole('link', { name: 'Bad & dusch' }).click();
  await page.getByRole('link', { name: 'Hem & Städ' }).click();
  await page.getByRole('link', { name: 'Grill' }).click();
  await page.getByRole('heading', { name: 'Tändare Bras Och Grill' }).click();
}
