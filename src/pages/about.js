import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>Welcome to my matrix</h1>
                {/* <p>Welcome to my matrix.</p> */}
                {/* <p>Need a developer? <Link to="/contact">Well Fuck You</Link></p> */}
                
            </Layout>
        </div>
    )
}

export default AboutPage