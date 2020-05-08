import React from 'react'
import { Title, Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { TitleCard, Card, CardHeader, CardBody } from '../components/card'
import { ExternalLink } from '../components/link'
import { useWork } from '../hooks'
import { kebabCase } from '../util'

const WorkPage = () => {
    const work = useWork()

    return (
        <PageContent>
            <SEO 
                title="Our Work"
                description=""
                keywords=""
            />
            
            <TitleCard title="Our Work">
                <Paragraph>
                    We will update this page with the latest projects coming out of RENCI as our researchers and their partners work together to develop novel approaches for dealing with COVID-19.
                </Paragraph>
            </TitleCard>
            
            {
                work.map(item => (
                    <Card key={ kebabCase(item.frontmatter.title) }>
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
