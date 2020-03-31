import React from 'react'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { useResources } from '../hooks'
import { Title, Heading, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody, CardFooter } from '../components/card'
import { ExternalLink } from '../components/link'

const ResourcesPage = () => {
    const resources = useResources()

    return (
        <PageContent>
            <SEO 
                title="Resources"
                description=""
                keywords=""
            />
            <Title>Resources</Title>

            <section id="resource-list">
                {
                    resources.map(({ name, url, description }) => (
                        <Card>
                            <CardHeader>{ name }</CardHeader>
                            <CardBody>
                                { description }
                            </CardBody>
                            <CardFooter right>
                                <ExternalLink to={ url }>{ url }</ExternalLink>
                            </CardFooter>
                        </Card>
                    ))
                }
            </section>
        </PageContent>
    )
}

export default ResourcesPage
