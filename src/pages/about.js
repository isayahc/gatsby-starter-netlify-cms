import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>THIS IS ALL ABOUT MEEEEE</h1>
                <p>Welcome to my matrix.</p>
                <p>Need a developer? <Link to="/contact">Well Fuck You</Link></p>
                <p> <a href="https://github.com/isayahc" target="_blank" rel="noreferrer">Here is my github tho</a></p>
            </Layout>
        </div>
    )
}

export default AboutPage