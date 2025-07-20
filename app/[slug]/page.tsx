import { client } from '@/sanity/lib/client'
import { pageWithSectionsQuery } from '@/sanity/queries/pageWithSections'
import PageRenderer from '@/components/PageRenderer'

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const data = await client.fetch(pageWithSectionsQuery, { slug: params.slug })
  return <PageRenderer sections={data?.sections || []} />
}
