const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const workTemplate = path.resolve(`src/templates/work-template.js`)
    const result = await graphql(`{
        work: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                    }
                    html
                }
            }
        }
    }`)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.work.edges.forEach(({ node }) => {
        console.log(`Creating page: ${ node.frontmatter.path }`)
        createPage({
            path: node.frontmatter.path,
            component: workTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}