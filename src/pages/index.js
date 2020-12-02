import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>YOYO</h1>
      <h2>Check my blog, G.</h2>
      <p>Need a developer? <Link to="/contact">Click This guy</Link></p>
    </Layout>
  )

}

export default IndexPage
