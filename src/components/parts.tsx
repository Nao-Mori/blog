import SEO from "../components/seo"
import React from "react"
import { Link } from "gatsby"

export const Wrapper = props => (
    <>
        <SEO title={props.data.title} />
            <div style={{maxWidth:"800px", margin:"40px auto", padding:"0 15px"}}>
            <h1>{props.data.title}</h1>
            
            <div style={{ width:"100%", display:"flex", flexWrap:"wrap", padding:"8px" }}>
                {props.data.tags.map((tag, key)=>(
                <h4 key={key}
                    style={{
                        backgroundColor:"rgb(255,255,250)",
                        margin:"2px 6px", padding:"3px 9px",
                        borderRadius:"5px",
                        boxShadow:"0px 2px 7px rgb(0,0,0,0.5)"
                    }}
                >{tag}</h4>
                ))}
            </div>
            <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>{props.data.date} by Nao Mori</h5>
            <h4>{props.children}</h4>
            <Link to="/">Go back to top</Link>
        </div>
    </>
)