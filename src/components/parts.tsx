import SEO from "../components/seo"
import React, { useState } from "react"
import { Link } from "gatsby"
import Profile from "./profile"
import * as emailjs from "emailjs-com"

export const Wrapper = props => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)

    const submit =()=>{
        if( !name || !message || !sent ){
            setSent(true)
            let templateParams = {
                from_name: `${name}`,
                to_name: 'Nao',
                subject: `Comment on ${props.data.title}`,
                message_html: message,
            }
            emailjs.send(
                'gmail',
                'template_E4vRe8bo',
                templateParams,
                'user_DidFMxhza8zx9YgRNBTYS'
            )
        }
    }

    return (
    <>
        <SEO title={props.data.title} />
        <div style={{display:"flex", flexWrap:"wrap", margin:"0 auto", maxWidth:"1400px", paddingBottom:50}}>

          <Profile show={false}/>
          <div style={{ margin:"0 auto" }} className="right-block">
            <div style={{ maxWidth:"900px", margin:"40px auto", padding:"0 15px" }}>
            <h1>{props.data.title}</h1>
            
            <div style={{ width:"100%", display:"flex", flexWrap:"wrap", padding:"8px" }}>
                {props.data.tags.map((tag, key)=>(
                <h4 key={key}
                    style={{
                        backgroundColor:"rgb(255,255,250)",
                        margin:"5px 6px", padding:"3px 9px",
                        borderRadius:"5px",
                        boxShadow:"0px 2px 7px rgb(0,0,0,0.5)"
                    }}
                >{tag}</h4>
                ))}
            </div>
            <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>{props.data.date} by Nao Mori</h5>
            <h4>{props.children}</h4>
        
            <br/>
            {sent?
            <div style={{ background: "white", boxShadow:"0 0 10px rgba(0,0,0,0.1)", padding:"20px"}}>
                <h3 style={{ margin:0, padding: 0 }}>Thanks for the comment!!</h3>
                </div>
            :
            <div style={{ background: "white", boxShadow:"0 0 10px rgba(0,0,0,0.1)", padding:"20px"}}>
                <h3>Let me know what you thought about this article!</h3>
                <input onChange={e=> setName(e.target.value)} style={{ width: "90%", marginBottom:"10px", maxWidth:"700px" }} placeholder="Name or Email" />
                <br/>
                <textarea onChange={e=> setMessage(e.target.value)} style={{ width: "90%", marginBottom:"10px",  maxWidth:"700px" }} placeholder="Comment" />
                <br/>
                <button onClick={submit}>Send Feedback</button>
            </div>
            }
            <br/>
            <Link to="/">
                Go Back to Top Page
            </Link>
        </div>
        </div>
        </div>
    </>
    )
}