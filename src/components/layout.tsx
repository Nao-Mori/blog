import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Image from "./image"
import Header from "./header"
import "./layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle={margin:"0 6px"}

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

  let path = window.location.pathname

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          background: "radial-gradient(rgb(235,230,235),rgb(255,252,252))",
          paddingTop: `5.45rem`,
        }}
      >
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap" rel="stylesheet"/>
        </Helmet>
        <main style={{minHeight:"95vh"}}>
        <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>
          <div className={path !== "/" ? "profile":null} style={{width:"240px", margin:"0 auto", padding:"25px 10px"}}>
            <div style={{width:"190px", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", margin:"0 auto"}}>
            <Image name = "placeholderImage" />
            </div>
            <h2 style={{textAlign:"center", margin:"10px", fontWeight:"bolder"}}>nao mori</h2>
            <h5 style={{textAlign:"center", color:"gray", margin:"0 0 15px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Leverkusen</h5>
            <h5 style={{marginLeft:"11px", fontFamily:"Kalam" }}>Hello, I'm a software developer. I'm taking notes on things I learned hoping others find them interesting too!</h5>
            <a className="facebook" href="https://www.facebook.com/profile.php?id=100012798553121"><FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} /></a>
            <a className="facebook" href="https://github.com/nao-mori"><FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} /></a>
            <a className="facebook" href="https://www.linkedin.com/in/nao-mori/"><FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} /></a>
            <a className="facebook" href="https://nao-mori.com"><FontAwesomeIcon icon={faUserCircle} size="2x" style={iconStyle} /></a>
            <p/>
          </div>
          <div style={{margin:"0 auto"}} className="right-block">
          {children}
          </div>
          </div>
        </main>
        <footer style={{padding:"20px", backgroundColor:"rgba(0,0,0,0.2)", textAlign:"center"}}>
         <h4 style={{ margin:"0", color: "white" }}>©Nao Mori {new Date().getFullYear()}</h4>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
