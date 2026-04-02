import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_ALERTS } from '@/lib/queries'
import { AlertsData } from '@/lib/types'
import Header from '../components/Header'
import AlertCard from '../components/AlertCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Alerts | Town',
  description: 'Browse our alerts.',
}

async function getAlerts() {
  try {
    const client = getClient()
    const data = await client.raw(GET_ALERTS, { first: 50 })
    return data?.nodeAlerts?.nodes || []
  } catch (error) {
    console.error('Error fetching alerts:', error)
    return []
  }
}

export default async function AlertsPage() {
  const items = await getAlerts()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Alerts
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our alerts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Alerts Yet</h2>
              <p className="text-gray-500">
                Alerts will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <AlertCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
