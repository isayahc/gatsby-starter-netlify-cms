import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from '../components/layout'


export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug : {eq: $slug}){
            title
            createdAt(formatString: "MMMM Do, YYYY")
            body {
                raw
            }
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.createdAt}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
            {/* {documentToHtmlString(props.data.contentfulBlogPost.body.raw)} */}
        </Layout>
    )
}

export default Blog