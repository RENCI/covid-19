import { graphql, useStaticQuery } from 'gatsby'

const resourcesQuery = graphql`{
    resources: allResourcesYaml(sort: {fields: title, order: ASC}) {
        edges {
            node {
                title
                resources {
                    title
                    source
                    url
                }
            }
        }
    }
}`

export const useResources = () => {
    const { resources } = useStaticQuery(resourcesQuery)
    return resources.edges.map(({ node }) => node)
}
