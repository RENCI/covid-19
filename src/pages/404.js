import React from 'react'
import { PageContent } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SEO } from '../components/seo'

const NotFoundPage = () => (
    <PageContent>
        <SEO 
            title="404: Not found"
            description=""
            keywords=""
        />

        <Title>404 - NOT FOUND</Title>

        <Paragraph>Our sincerest apologies; we've led you astray.</Paragraph>
    </PageContent>
)

export default NotFoundPage
