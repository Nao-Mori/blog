import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          backgroundColor:"rgb(243,240,240)",
          paddingTop: `5.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{padding:"20px", backgroundColor:"rgba(0,0,0,0.1)", textAlign:"center"}}>
         <h5 style={{margin:"0"}}>©Nao Mori {new Date().getFullYear()}</h5>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
