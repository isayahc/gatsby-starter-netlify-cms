const path = require('path')


module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query{
      allContentfulBlogPost{
        edges{
          node{
            slug
          }
        }
      }
    }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) =>{
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context:{
              slug: edge.node.slug
            }
        })
    })

    //1. Get Path to tempalate 
    //2. Get Markdown data
    //3. Create new Pages
}