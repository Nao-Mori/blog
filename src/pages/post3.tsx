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
      },
      placeholderImage2: file(relativePath: { eq: "post3/s3-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage3: file(relativePath: { eq: "post3/s3-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage4: file(relativePath: { eq: "post3/s3-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage5: file(relativePath: { eq: "post3/s3-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <SEO title="Make your AWS Website Load Faster" />
      <div style={{maxWidth:"750px", margin:"50px auto", padding:"0 15px"}}>
        <div>
          <h1 style={{textAlign:"left"}}>Make your AWS Website Load Faster in One minute</h1>
          <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>3/26/2020 by Nao Mori</h5>
          <div style={{maxWidth:"400px"}}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
          It's important to save your users' time and data for a better user experience. 
          Here are steps to make your AWS S3 / CloudFront websites load significantly faster
          even if you finished deploying and you don't want to make changes to your project,
          <br/>
          <br/>
          <h3>1. Compress Objects</h3>
          Make sure all your JS files are compressed before sending them to users.
          Go to your CloudFront Distribution
          as shown in the image below,
          Click on "Behaviors", check the default behavior and click on "Edit". 
          Then you should see the option of "Compress objects automatically", check it.
          

        <div style={{maxWidth:"400px"}}>
          <Img fluid={data.placeholderImage5.childImageSharp.fluid} />
          </div>
          Next you have to accept headers in your S3 bucket.
          Go to S3, choose a bucket.
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage4.childImageSharp.fluid} />
          </div>
          <br/>
          <h3>2: Cache Control</h3>
          Do you have many images slowing down your website?
          Make sure when users visit your website again images will load instantly!
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
          </div>
          
          <h3>3: Invalidation</h3>
          This step is easy to forget but it's important to delete all the old settings are objects
          and have your users enjoy your website that became faster right away.
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
          </div>
          After about a minute... BAM! Old settings are gone and now your website loads much faster!
          This way users won't notice that you made any change.
          After invalidating objects 
          
          </h4>
        </div>
        <Link to="/">Go back to top</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
