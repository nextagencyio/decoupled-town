import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_DEPARTMENTS } from '@/lib/queries'
import { DepartmentsData } from '@/lib/types'
import Header from '../components/Header'
import DepartmentCard from '../components/DepartmentCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Departments | Town',
  description: 'Browse our departments.',
}

async function getDepartments() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_DEPARTMENTS, { first: 50 })
    return data?.nodeDepartments?.nodes || []
  } catch (error) {
    console.error('Error fetching departments:', error)
    return []
  }
}

export default async function DepartmentsPage() {
  const items = await getDepartments()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Departments
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our departments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Departments Yet</h2>
              <p className="text-gray-500">
                Departments will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <DepartmentCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
