import { graphql, useStaticQuery } from 'gatsby'

const workQuery = graphql`{
    work: allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                }
                html
            }
        }
    }
}`

export const useWork = () => {
    const { work } = useStaticQuery(workQuery)
    return work.edges.map(({ node }) => node)
}
