import React from "react"
import { Link } from "gatsby"
import Image from "../components/imageArticle"
import { Articles } from "./articles"

const Intro = () => (
  <div style={{ minWidth:"300px", padding:"0 10px", display: "flex", flexWrap:"wrap", width:"100%", maxWidth:"1400px", justifyContent:"center" }}>
    {Articles.map((article, key)=>{
      return (
        <Link  to={`post${Articles.length - key}`} key={key} style={{ color:"black", textDecoration:"none", margin:"15px 5px", padding:"0 5px" }}>
          <div
            className="article"
            style={{
              maxWidth:"330px",
              minWidth:"250px",
              boxShadow:"5px 10px 10px rgba(0,0,0,0.4)",
              borderRadius:"5px",
              height:"380px",
              overflow:"hidden",
              position:"relative",
            }}
          >
            <div style={{height: "115px", overflow:"hidden", background: "rgb(245,245,245)", padding: "0px"}}>
            <Image num={Articles.length - key} />
            </div>
            <div style={{padding: "15px"}}>
              <h3 style={{ color:"rgb(60,60,60)", margin: 0 }}>{article.title}</h3>
              <h6 style={{ textAlign:"right", margin:"10px 0", color:"gray" }}>{article.date}</h6>
          
              <h4 style={{ color:"rgb(90,90,90)", lineHeight:"1.4" }}>{article.body}</h4>
              <div style={{bottom:0, left: 0, position:"absolute",width:"100%", backgroundColor:"rgba(0,0,0,0.5)", display:"flex",flexWrap:"wrap", padding:"8px"}}>
                {article.tags.map((tag, key)=>(
                <h5 key={key} style={{backgroundColor:"rgb(255,255,250)", margin:"2px 5px", padding:"3px 5px", borderRadius:"3px"}}>{tag}</h5>
                ))}
              </div>
            </div>
          </div>
        </Link>
      )
    })}
  </div>
)

export default Intro