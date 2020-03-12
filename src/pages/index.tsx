import React from "react"
import { Link } from "gatsby"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from "../components/image4"
import Image5 from "../components/image5"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle={margin:"0 6px"}
const imgStyle={width:"200px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}
const imgStyle2={width:"266px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}
const imgStyle3={width:"128px", margin:"5px auto", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", backgroundColor:"white"}

const Articles = [
  {
      title: "Deal with my ADHD and be productive",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minima ducimus harum explicabo pariatur eligendi! Modi deserunt tempore quidem accusantium, officiis dolores qui alias a? Doloribus nisi nihil et maxime?",
      tags: ["ADHD", "productivity", "motivation", "work"],
      date: "3/12/2020"
  },
  {
      title: "Why I choose to live in Germany over Japan",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic quod aperiam iure, modi reprehenderit impedit quibusdam odit ab obcaecati. Ut iusto soluta architecto velit eos quis fuga eligendi temporibus!",
      tags: ["life", "Japan", "Germany", "food", "people"],
      date: "3/4/2020"
  },
  {
      title: "Things I wish I knew before teaching myself how to code",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquam natus voluptatem illum beatae non quae neque labore facere delectus ab consectetur illo, asperiores quis quos, eos sapiente atque corporis.",
      tags: ["coding", "self-teaching", "web"],
      date: "2/28/2020"
  },
]

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>
        <div style={{width:"240px", margin:"0 auto", padding:"0 10px"}}>
          <div style={{width:"200px", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", margin:"0 auto"}}>
          <Image />
          </div>
          <h2 style={{textAlign:"center", margin:"10px", fontWeight:"bolder"}}>nao mori</h2>
          <h5 style={{textAlign:"center", color:"gray", margin:"0 0 15px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Leverkusen</h5>
          <h4 style={{marginLeft:"10px", fontFamily:"Kalam" }}>Hello, I'm taking notes on things I learned hoping others find them interesting too!</h4>
          <a className="facebook" href="https://www.facebook.com/profile.php?id=100012798553121"><FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} /></a>
          <a className="facebook" href="https://github.com/nao-mori"><FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} /></a>
          <a className="facebook" href="https://www.linkedin.com/in/nao-mori-878223171/"><FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} /></a>
          <a className="facebook" href="https://nao-mori.com"><FontAwesomeIcon icon={faUserCircle} size="2x" style={iconStyle} /></a>
          <p/>
        </div>
        <div style={{margin:"0 auto"}} className="right-block">
          <div style={{minWidth:"300px", padding:"0 10px", display: "flex", flexWrap:"wrap", width:"100%", maxWidth:"1400px"}}>
            {Articles.map((article, key)=>{
              return (
                <Link  to={`post${key+1}`} key={key} style={{color:"black",textDecoration:"none", margin:"10px auto", padding:"0 5px"}}>
                <div
                  className="article"
                  style={{
                    maxWidth:"330px",
                    minWidth:"250px",
                    boxShadow:"5px 10px 10px rgba(0,0,0,0.4)",
                    padding:"20px",
                    borderRadius:"5px",
                    height:"320px",
                    overflow:"hidden",
                    position:"relative"
                  }}
                >
                  <h3 style={{fontFamily:"cursive", color:"rgb(60,60,60)", margin: 0}}>{article.title}</h3>
                  <h6 style={{textAlign:"right", fontFamily:"cursive", margin:"10px 0", color:"gray"}}>{article.date}</h6>
                  <h4 style={{ color:"rgb(90,90,90)", fontFamily:"cursive"}}>{article.body}</h4>
                  <div style={{bottom:0, left: 0, position:"absolute",width:"100%", backgroundColor:"rgba(0,0,0,0.1)", display:"flex",flexWrap:"wrap", padding:"8px"}}>
                    {article.tags.map((tag, key)=>(
                    <h5 key={key} style={{backgroundColor:"rgb(255,255,250)", margin:"2px 5px", padding:"3px 5px", borderRadius:"5px"}}>{tag}</h5>
                    ))}
                  </div>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div style={{maxWidth:"1100px", margin:"0 auto"}}>
        <h2 style={{textAlign:"center", margin:"10px 0", fontFamily:"cursive"}}>PICS</h2>
        <div style={{display:"flex", flexWrap:"wrap", margin:"20px auto", maxWidth:"1400px", padding: 5}}>
          <div style={imgStyle}>
            <Image2 />
            <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
          </div>
          <div style={imgStyle}>
            <Image3 />
            <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> New York</h5>
          </div>
          <div style={imgStyle2}>
            <Image4 />
            <h6 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Mejiro University (Tokyo)</h6>
          </div>
          
          <div style={imgStyle3}>
            <Image5 />
            <h5 style={{textAlign:"center", color:"rgb(60,60,60)", margin:"5px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles</h5>
          </div>
        </div>
      </div>
      <p style={{height:"30px"}} />
    </Layout>
  )
}

export default IndexPage