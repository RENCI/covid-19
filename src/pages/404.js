import React from 'react'
import { PageContent } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { Seo } from '../components/seo'

const NotFoundPage = () => (
    <PageContent>
        <Seo 
            title="404: Not found"
            description=""
            keywords=""
        />

        <Title>404 - NOT FOUND</Title>

        <Paragraph>Our sincerest apologies; we've led you astray.</Paragraph>
    </PageContent>
)

export default NotFoundPage
