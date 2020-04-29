import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle = { margin:"0 6px" }

const Profile = ({ show }) => {
    const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "pic2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }`)
    return (
      <div className = {!show?"profile":null} style={{width:"250px", margin:"0 auto", padding:"25px 10px"}}>
        <div style={{width:"190px", boxShadow:"5px 10px 10px rgba(0,0,0,0.4)", margin:"0 auto"}}>
        <Img fluid={data.img.childImageSharp.fluid} />
        </div>
        <h2 style={{textAlign:"center", margin:"0", fontWeight:"bolder", paddingBottom:"20px"}}>nao mori</h2>
        <h5 style={{textAlign:"center", color:"gray", margin:"0 0 15px 0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Leverkusen</h5>
        <h5 style={{marginLeft:"6px", fontFamily:"Kalam", padding:0 }}>Hello, I'm a software developer. I'm taking notes on things I learned hoping others find them interesting too!</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <a className="facebook" target="blank" href="https://www.facebook.com/profile.php?id=100012798553121"><FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} /></a>
          <a className="facebook" target="blank" href="https://github.com/nao-mori"><FontAwesomeIcon icon={faGithub} size="2x" style={iconStyle} /></a>
          <a className="facebook" target="blank" href="https://www.linkedin.com/in/nao-mori/"><FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} /></a>
          <a className="facebook" target="blank" href="https://nao-mori.com"><FontAwesomeIcon icon={faUserCircle} size="2x" style={iconStyle} /></a>
        </div>
        <p/>
      </div>
    )
}

export default Profile