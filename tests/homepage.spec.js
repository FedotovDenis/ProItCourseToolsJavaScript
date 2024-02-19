import { test, expect, chromium } from '@playwright/test';

/*
test('React Demo page test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist');

  const counterButton = page.locator('text=Counter');
  await expect(counterButton).toBeVisible();
  await counterButton.click();

  const JokeButton = page.locator('text=Counter');
  await expect(JokeButton).toBeVisible();
  await JokeButton.click();

  const postsButton = page.locator('text=Counter');
  await expect(postsButton).toBeVisible();
  await postsButton.click();
});
*/

/*
// Використовуючи Playwright, напишіть код, який відкриває сторінку "https://google.com", здійснює пошук за фразою "Playwright testing", і робить скріншот першої сторінки результатів пошуку.
test('Playwright search test', async ({ page }) => {
  await page.goto('https://google.com');
  await page.fill('input[name="q"]', 'Playwright testing');
  await page.click('input[name="btnK"]');
  await page.screenshot({ path: 'screenshot.png' });
});
*/

test('React Demo page test', async () => {
  const browsers = await chromium.launch();
  const page = await browsers.newPage();
  await page.goto('https://google.com');
  const searchInput = await page.$('input[name="q"]');
  await searchInput?.type('Playwright testing');
  await page.keyboard.press('Enter');
  await page.screenshot({ path: 'google.png' });
  await browsers.close();
});
