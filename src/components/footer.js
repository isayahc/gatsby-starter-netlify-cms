import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            author
          }
        }
      }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>This is {data.site.siteMetadata.author}'s. hood Where My Niggas at?, CopyRight '69 </p>
        </footer>
    )
}

export default Footer