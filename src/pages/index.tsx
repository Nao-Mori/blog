import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Intro from "./intro"
import Profile from "../components/profile"

const imgStyle = { width:"200px", maxWidth:"40%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }
const imgStyle2 = { width:"266px", maxWidth:"54%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }
const imgStyle3 = { width:"128px", maxWidth:"26%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>

      <Profile show={true} />
      <div className="right-block">
        <Intro />
        </div>
      </div>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <p style={{ height: "30px" }}/>
    <div style={{ display:"flex", flexWrap:"wrap", margin:"20px auto", maxWidth:"1400px", padding: 5, justifyContent:"center", width:"100%" }}>
      <div style={imgStyle}>
        <Image name = "Image2" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
      </div>
      <div style={imgStyle}>
        <Image name = "Image3" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
      </div>
      <div style={imgStyle2}>
        <Image name = "Image4" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Tokyo</h5>
      </div>
      
      <div style={imgStyle3}>
        <Image name = "Image5" />
        <h6 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles</h6>
      </div>
    </div>
  </div>
    </Layout>
  )
}

export default IndexPage