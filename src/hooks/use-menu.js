import { graphql, useStaticQuery } from 'gatsby'

const menuQuery = graphql`
    query {
        site {
            siteMetadata {
                menuItems {
                    text
                    path
                }
            }
        }
    }
`

export const useMenu = () => {
    const { site: { siteMetadata: { menuItems } } } = useStaticQuery(menuQuery)
    return menuItems
}
