import React from 'react'
import { SEO } from '../components/seo'
import { graphql, Link } from 'gatsby'
import { PageContent } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody, CardFooter, TitleCard } from '../components/card'

export default ({ data, pageContext }) => {
    const { markdownRemark: { frontmatter, html } } = data

    return (
        <PageContent>
            <SEO 
                title={ frontmatter.title }
                description={ frontmatter.blurb }
                keywords=""
            />

            <TitleCard title={ frontmatter.title }>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </TitleCard>
    
        </PageContent>
    )
}

export const workItemQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                path
                title
                blurb
            }
            html
        }
    }
`