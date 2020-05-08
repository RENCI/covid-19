import React from 'react'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { SEO } from '../components/seo'
import { TitleCard, Card, CardHeader, CardBody } from '../components/card'
import { BulletedList, ListItem } from '../components/list'
import { ExternalLink } from '../components/link'
import { useBlog } from '../hooks'

const IndexPage = () => {
    const articles = useBlog()

    return (
        <PageContent>
            <SEO 
                title="Home"
                description=""
                keywords=""
            />
            
            <TitleCard title="RENCI's COVID-19 Response">
                <Paragraph>
                    Working closely with partner research institutions and the private sector, <ExternalLink to="https://www.renci.org/">RENCI</ExternalLink> is
                    adapting and extending its existing capabilities to accelerate COVID-19 response and research efforts.
                    RENCI researchers are leaders in data science and in data-driven discoveries, and we want to use those talents
                    to assist the larger international effort to slow the spread of the virus and search for treatments.
                </Paragraph>

                <Paragraph>
                    At a high level, our work in the area of COVID-19 research aims to:
                </Paragraph>

                <BulletedList>
                    <ListItem primary="Apply linked open data, including biomedical ontologies, to build in silico knowledge models of drugs, processes, and systems involved in the coronavirus disease and related diseases." />
                    <ListItem primary="Present aggregated clinical statistical models and an open, privacy-preserving framework to expose, share, and analyze data on clinical correlates of disease and outcomes, environmental exposures, socio-economic indicators, and genotype data." />
                    <ListItem primary="Provision notebook-based analytical environments with big data, machine learning, and artificial intelligence capabilities to support access to the growing body of COVID-19 related datasets, as well as tools to analyze and explore the data." />
                </BulletedList>
            </TitleCard>

            <Card>
                <CardHeader>Our Blog</CardHeader>
                <CardBody>
                    <Paragraph>
                        Keep up with the latest on our blog.
                    </Paragraph>
                    {
                        articles.map(({ date, title, url }) => (
                            <article key={ title }>
                                <Heading>
                                    <strong>{ date }</strong><br/>
                                    <ExternalLink to={ url }>{ title }</ExternalLink>
                                </Heading>
                            </article>
                        ))
                    }
                </CardBody>
            </Card>
    
            <Paragraph>
            </Paragraph>
        </PageContent>
    )
}
export default IndexPage
