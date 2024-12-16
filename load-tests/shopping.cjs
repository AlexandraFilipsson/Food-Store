module.exports = { myTestFlow };

async function myTestFlow(page) {

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
}
