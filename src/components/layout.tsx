import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

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
          background: "radial-gradient(rgb(215,210,215),rgb(255,250,250))",
          paddingTop: `5.45rem`,
        }}
      >
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet"/>
        </Helmet>
        <main style={{minHeight:"95vh"}}>{children}</main>
        <footer style={{padding:"20px", backgroundColor:"rgba(0,0,0,0.3)", textAlign:"center"}}>
         <h4 style={{ margin:"0", color: "white", fontFamily:"cursive", }}>©Nao Mori {new Date().getFullYear()}</h4>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
