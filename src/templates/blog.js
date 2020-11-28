import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'


import Layout from '../components/layout'
import Head from '../components/head'


// This query most retrieve
//  -slug
// - createdAt
// -body
// -references
// -title
// -url


export const query = graphql`
query ($slug: String!){
    contentfulBlogPost (slug: {eq: $slug}){
      title
      createdAt(formatString: "MMMM Do, YYYY")
      body{
        json
      }
    }
  }
`

const Blog = props => {
    const options = {
        //what does renderNode do
        //It overwrites how certain NodeTypes are rendered
        renderNode:{
            //alt is alt_title of img
            // url is asset's url
            "embedded-asset-block": (node) => {
                const alt= node.data.target.fields.title['en-US']
                const url=node.data.target.fields.file['en-US'].url
                // if all fails might, just connect to CMS location
                return <img alt={alt} src={url}/>
            }
        }
    }
    return (

        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.createdAt}</p>
          { documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}
          
        </Layout>
    )

}



export default Blog