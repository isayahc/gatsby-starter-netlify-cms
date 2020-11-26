import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>YOYO</h1>
      <h2>I'm cool, kid.</h2>
      {/* <p>Need a developer? <a href="/contact">Well Fuck You </a></p> */}
      <p>Need a developer? <Link to="/contact">Well Fuck You</Link></p>
    </Layout>
  )

}

export default IndexPage
