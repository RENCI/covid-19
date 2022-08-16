import React from 'react'
import { Seo } from '../components/seo'
import { graphql } from 'gatsby'
import { PageContent } from '../components/layout'
import { TitleCard } from '../components/card'

const WorkPage = ({ data, pageContext }) => {
    const { markdownRemark: { frontmatter, html } } = data

    return (
        <PageContent>
            <Seo 
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
export default WorkPage