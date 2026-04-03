import { test, expect } from '@playwright/test'

test.describe('Town of Willowbrook - Non-demo mode', () => {
  test('homepage loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Willowbrook/)
    await expect(page.getByText('Your Community, Your Home')).toBeVisible()
  })

  test('homepage displays stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('24,500')).toBeVisible()
    await expect(page.getByText('Residents')).toBeVisible()
  })

  test('departments listing page loads', async ({ page }) => {
    await page.goto('/departments')
    await expect(page.locator('h1')).toContainText('Departments')
    await expect(page.getByRole('heading', { name: 'Administration', exact: true }).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Public Works' }).first()).toBeVisible()
  })

  test('department detail page loads', async ({ page }) => {
    await page.goto('/departments/administration')
    await expect(page.locator('h1')).toContainText('Administration')
    await expect(page.getByText('(555) 100-1000')).toBeVisible()
    await expect(page.getByText('Town Hall, 100 Main Street')).toBeVisible()
  })

  test('officials listing page loads', async ({ page }) => {
    await page.goto('/officials')
    await expect(page.locator('h1')).toContainText('Officials')
    await expect(page.getByRole('heading', { name: 'Patricia Reynolds' }).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'David Chen' }).first()).toBeVisible()
  })

  test('official detail page loads', async ({ page }) => {
    await page.goto('/officials/mayor-patricia-reynolds')
    await expect(page.locator('h1')).toContainText('Patricia Reynolds')
    await expect(page.getByText('Mayor', { exact: true }).first()).toBeVisible()
  })

  test('services listing page loads', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.getByRole('heading', { name: 'Building Permits' }).first()).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/building-permits')
    await expect(page.locator('h1')).toContainText('Building Permits')
    await expect(page.getByText('Property owners').first()).toBeVisible()
  })

  test('meetings listing page loads', async ({ page }) => {
    await page.goto('/meetings')
    await expect(page.locator('h1')).toContainText('Meetings')
    await expect(page.getByRole('heading', { name: /Town Council/ }).first()).toBeVisible()
  })

  test('alerts listing page loads', async ({ page }) => {
    await page.goto('/alerts')
    await expect(page.locator('h1')).toContainText('Alerts')
    await expect(page.getByRole('heading', { name: /Water Main/ }).first()).toBeVisible()
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About the Town of Willowbrook')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
    await expect(page.getByText('info@willowbrook.gov')).toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Services' }).first().click()
    await expect(page.locator('h1')).toContainText('Services')
  })
})
