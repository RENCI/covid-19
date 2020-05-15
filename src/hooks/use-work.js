import { graphql, useStaticQuery } from 'gatsby'

const workQuery = graphql`{
    work: allMarkdownRemark(sort: {fields: frontmatter___title}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    blurb
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
