import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "post3/s3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  `)

  return(
    <Layout>
      <SEO title="Struggles of Being Japanese in Germany" />
      <div style={{maxWidth:"750px", margin:"50px auto", padding:"0 15px"}}>
        <div>
          <h1 style={{textAlign:"left"}}>Struggles of Being Japanese in Germany</h1>
          <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>4/14/2020 by Nao Mori</h5>
          <div style={{maxWidth:"300px", margin: "0 auto"}}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <br/>
          <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>

          
          </h4>
        </div>
        <Link to="/">Go back to top</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
