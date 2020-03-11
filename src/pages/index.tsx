import React, { useState } from "react"
import { Link } from "gatsby"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from "../components/image4"
import Image5 from "../components/image5"
import Articles from "./article"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle={margin:"0 6px", color:"gray"}
const imgStyle={width:"200px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)"}
const imgStyle2={width:"266px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)"}
const imgStyle3={width:"128px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)"}

const IndexPage = () => {
  const [page1, setPage1] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>
        <div style={{width:"240px", margin:"0 auto", padding:"0 10px"}}>
          <div style={{width:"200px", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", margin:"0 auto"}}>
          <Image />
          </div>
          <h2 style={{textAlign:"center", margin:"10px", fontWeight:"bolder"}}>nao mori</h2>
          <h5 style={{textAlign:"center", fontStyle: "italic", color:"gray", margin:"0 0 15px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Leverkusen</h5>
          <h5 style={{marginLeft:"10px" }}>Hello, I'm taking notes on things I learned hoping others find them interesting too!</h5>
          <a href=""></a><FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
          <FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} />
          <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} />
          <FontAwesomeIcon icon={faUserCircle} size="2x" style={iconStyle} />
          <p/>
        </div>
        <div style={{margin:"0 auto"}} className="right-block">
          <div style={{minWidth:"300px", padding:"0 10px", display: "flex", flexWrap:"wrap", width:"100%", maxWidth:"800px"}}>
            {Articles(0).map((article, key)=>{
              return (
                <Link  to={`post${key+1}`} key={key} style={{color:"black",textDecoration:"none", margin:"10px auto"}}>
                <div
                  className="article"
                  style={{
                    maxWidth:"330px",
                    minWidth:"250px",
                    boxShadow:"5px 10px 10px rgba(0,0,0,0.4)",
                    padding:"15px",
                    borderRadius:"5px",
                    height:"300px",
                  }}
                >
                  <h3>{article.title}</h3>
                  <h4 style={{color:"rgb(60,60,60)"}}>{article.body}</h4>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div style={{maxWidth:"1100px", margin:"0 auto"}}>
        <h3 style={{textAlign:"center", margin:"10px 0"}}>Gallary</h3>
        <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", padding: 5}}>
          <div style={imgStyle}>
            <Image2 />
          </div>
          <div style={imgStyle}>
            <Image3 />
          </div>
          <div style={imgStyle2}>
            <Image4 />
          </div>
          
          <div style={imgStyle3}>
            <Image5 />
          </div>
        </div>
      </div>
      <p/>
    </Layout>
  )
}

export default IndexPage