/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import departmentsData from '@/data/mock/departments.json'
import officialsData from '@/data/mock/officials.json'
import servicesData from '@/data/mock/services.json'
import meetingsData from '@/data/mock/meetings.json'
import alertsData from '@/data/mock/alerts.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'departments.json': departmentsData,
  'officials.json': officialsData,
  'services.json': servicesData,
  'meetings.json': meetingsData,
  'alerts.json': alertsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetDepartments') || query.includes('nodeDepartments')) {
      return loadMockData('departments.json')
    }

    if (query.includes('GetOfficials') || query.includes('nodeOfficials')) {
      return loadMockData('officials.json')
    }

    if (query.includes('GetServices') || query.includes('nodeServices')) {
      return loadMockData('services.json')
    }

    if (query.includes('GetMeetings') || query.includes('nodeMeetings')) {
      return loadMockData('meetings.json')
    }

    if (query.includes('GetAlerts') || query.includes('nodeAlerts')) {
      return loadMockData('alerts.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
