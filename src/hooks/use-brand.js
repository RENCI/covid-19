import { graphql, useStaticQuery } from 'gatsby'

const imageQuery = graphql`
    query {
        imageSharp: file(relativePath: {eq: "renci.png"}) {
            id
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
        }
    }
`

export const useBrand = () => {
    const data = useStaticQuery(imageQuery)
    return { data }
}
