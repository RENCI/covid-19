import { graphql, useStaticQuery } from 'gatsby'

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
    const data = useStaticQuery(logoQuery)
    const fluid = data.allImageSharp.edges[0].node.fluid
    const fixed = data.allImageSharp.edges[0].node.fixed
    return { fluid, fixed }
}
