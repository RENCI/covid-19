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

const logoQuery = graphql`{
    allImageSharp(filter: {fluid: {originalImg: {regex: "/renci.png/"}}}) {
        edges {
            node {
                id
                fluid(maxWidth: 180) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                }
                fixed {
                    base64
                    tracedSVG
                    aspectRatio
                    srcWebp
                    srcSetWebp
                    originalName
                }
            }
        }
    }
}`

export const useBrand = () => {
    const data = useStaticQuery(imageQuery)
    // const fluid = data.allImageSharp.edges[0].node.fluid
    // const fixed = data.allImageSharp.edges[0].node.fixed
    return { data }
}
