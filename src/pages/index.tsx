import React from "react"
import { Router, Location } from "@reach/router"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Articles from "./article"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle={margin:"0 6px", color:"gray"}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>
      <div style={{width:"210px", margin:"0 auto", padding:"0 10px"}}>
        <Image />
        
        <h2 style={{textAlign:"center", margin:"10px", fontWeight:"bolder"}}>nao mori</h2>
        <h5 style={{textAlign:"center", fontStyle: "italic", color:"gray", margin:"0 0 15px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Dusseldorf</h5>
        <h5 style={{marginLeft:"10px" }}>Hello, I'm taking notes on things I learned hoping others find them interesting too!</h5>
        <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
        <FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} />
        <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} />
        <FontAwesomeIcon icon={faUserCircle} size="2x" style={iconStyle} />

      </div>
      <div style={{margin:"0 auto"}} className="right-block">
        <div style={{minWidth:"300px", padding:"0 10px", display: "flex", flexWrap:"wrap", width:"100%", maxWidth:"800px"}}>
          {Articles(0).map((article, key)=>{
            return (
              <div key={key}
                style={{
                  maxWidth:"330px",
                  minWidth:"250px",
                  background:"white",
                  boxShadow:"5px 10px 10px rgba(0,0,0,0.4)",
                  padding:"15px",
                  borderRadius:"10px",
                  height:"300px",
                  margin:"10px auto"
                }}
              >
                <h3>{article.title}</h3>
                <h4>{article.body}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </Layout>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <Router location={location} >
        {props.children}
      </Router>
    )}
  </Location>
)

const Page = props => (
  <div
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    Hey you reached here!
    {props.page}
  </div>
)

export default IndexPage