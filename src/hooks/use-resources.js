import { graphql, useStaticQuery } from 'gatsby'

const resourcesQuery = graphql`{
    resources: allResourcesYaml {
        edges {
            node {
                name
                url
                description
            }
        }
    }
}`

export const useResources = () => {
    const { resources } = useStaticQuery(resourcesQuery)
    return resources.edges.map(({ node }) => node)
}
