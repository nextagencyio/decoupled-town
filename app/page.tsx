import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Town of Willowbrook - Your Community, Your Home'
  const description = 'Nestled in the heart of the valley, Willowbrook is a vibrant community committed to transparent governance, excellent public services, and a high quality of life for all residents.'

  return {
    title,
    description,
    keywords: ['Town Government', 'Municipal Services', 'Public Safety', 'Parks & Recreation', 'Town Meetings', 'Community'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  let homepageContent = null
  try {
    const data = await client.raw(GET_HOMEPAGE_DATA)
    homepageContent = data?.nodeHomepages?.nodes?.[0] || null
  } catch (error) {
    console.error('Error fetching homepage:', error)
  }

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
