import React from 'react'
import { Title } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'
import { ExternalLink } from '../components/link'
import { useWork } from '../hooks'

const WorkPage = () => {
    const work = useWork()

    console.log(work)

    return (
        <PageContent>
            <SEO 
                title="Our Work"
                description=""
                keywords=""
            />
            <Title>Our Work</Title>
            
            {
                work.map(item => (
                    <Card>
                        <CardHeader>{ item.frontmatter.title }</CardHeader>
                        <CardBody>
                            <div dangerouslySetInnerHTML={{ __html: item.html }} />
                        </CardBody>
                    </Card>
                ))
            }

        </PageContent>
    )
}

export default WorkPage
