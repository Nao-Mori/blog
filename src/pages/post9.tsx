import React from "react"
import { Link } from "gatsby"
//import Img from "gatsby-image"
//import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "post3/s3.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 700) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return(
    <Layout>
      <SEO title="Gmail" />
      <div style={{maxWidth:"750px", margin:"50px auto", padding:"0 15px"}}>
        <div>
          <h1 style={{textAlign:"left"}}>Sending and Receiving Emails with AWS SES / Lambda on Your Gmail Account</h1>
          <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>4/14/2020 by Nao Mori</h5>
          <br/>
          <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
            <h2>Goal1: I want to forward Emails received on "contact@nao-mori.com" to my Gmail.</h2>
            Before reading this you should already know how to store Emails that are sent to your domain in your S3 bucket.
            which you can find information <a href="https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination/" target="blank">here</a>.
            <h2>Goal2: I want to send Emails with an Email associated with my domain</h2>
            <h1>Good's</h1>
            1: You get to receive 1,000 messages per month. Maximum send rate is now 14 messages per second)
            Which you get to receive 33 messages everyday, not bad right?
          </h4>
        </div>
        <Link to="/">Go back to top</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
