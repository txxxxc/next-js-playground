import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/');
});

test('test1', async ({ page }) => {
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});


test('test2', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test3', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test4', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test5', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test6', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test7', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test8', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test9', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

test('test10', async ({ page }) => {

  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('username');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Logged in as username!!')).toBeVisible();
});

