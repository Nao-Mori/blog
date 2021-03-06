import React from "react"
import "./index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import Intro from "../components/intro"
import Profile from "../components/profile"

const imgStyle = { width:"200px", maxWidth:"40%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }
const imgStyle2 = { width:"266px", maxWidth:"54%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }
const imgStyle3 = { width:"128px", maxWidth:"26%", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white", margin: "10px" }
const imgContainer = { color: "rgb(60,60,60)", margin:"5px 0" }

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
          <p style={{ height: "30px" }}/>
          <h2 style={{ textAlign: "center" }}>My Journey <FontAwesomeIcon icon={faHeart} style={{ color: "rgb(255,90,90)" }} /></h2>
          <div className="image-box"
           style={{ display:"flex", flexWrap:"wrap", margin:"20px auto", padding: 5, justifyContent:"center", width:"100%", textAlign: "center" }}
          >
            <div style={imgStyle}>
              <Image name = "Image2" />
              <h5 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
            </div>
            <div style={imgStyle}>
              <Image name = "Image3" />
              <h5 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
            </div>
            <div style={imgStyle}>
              <Image name = "Image1" />
              <h5 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> London</h5>
            </div>
            <div style={imgStyle}>
              <Image name = "Image" />
              <h5 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> Cologne</h5>
            </div>
            <div style={imgStyle2}>
              <Image name = "Image4" />
              <h5 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> Tokyo</h5>
            </div>
            
            <div style={imgStyle3}>
              <Image name = "Image5" />
              <h6 style={imgContainer}><FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles</h6>
            </div>
            
          </div>
    </Layout>
  )
}

export default IndexPage