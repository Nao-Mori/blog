import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pic7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <SEO title="Quick Way to Make your AWS Website Load Faster" />
      <div style={{maxWidth:"750px", margin:"50px auto", padding:"0 15px"}}>
        <div>
          <h1 style={{textAlign:"left"}}>Quick Way to Make your AWS Website Load Faster</h1>
          <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>3/22/2020 by Nao Mori</h5>
          <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </h4>
        </div>
        <Link to="/">Go back to top</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
