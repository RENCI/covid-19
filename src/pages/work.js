import React from 'react'
import { Title, Paragraph } from '../components/typography'
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

            <section>
                <Paragraph>
                    We will update this page with the latest projects coming out of RENCI as our researchers and their partners work together to develop novel approaches for dealing with COVID-19.
                </Paragraph>
            </section>
            
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
