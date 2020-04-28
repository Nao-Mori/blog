import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Intro from "./intro"

const imgStyle={width:"200px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}
const imgStyle2={width:"266px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}
const imgStyle3={width:"128px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
        <Intro />
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <p style={{ height: "30px" }}/>
    <div style={{ display:"flex", flexWrap:"wrap", margin:"20px auto", maxWidth:"1400px", padding: 5 }}>
      <div style={imgStyle}>
        <Image name = "placeholderImage2" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
      </div>
      <div style={imgStyle}>
        <Image name = "placeholderImage3" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
      </div>
      <div style={imgStyle2}>
        <Image name = "placeholderImage4" />
        <h6 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Mejiro University (Tokyo)</h6>
      </div>
      
      <div style={imgStyle3}>
        <Image name = "placeholderImage5" />
        <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles</h5>
      </div>
    </div>
  </div>
    </Layout>
  )
}

export default IndexPage