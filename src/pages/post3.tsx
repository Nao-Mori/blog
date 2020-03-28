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
          <div style={{maxWidth:"300px", margin: "0 auto"}}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <br/>
          <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
          It's important to save your users' time and data for a better user experience. 
          Here are steps to make your AWS S3 / CloudFront websites load significantly faster
          even if you finished deploying and you don't want to make changes to your project.
          <br/>
          <br/>
          <h3>1. Compress Objects</h3>
          Compressing script files before sending them to users makes a significant difference to loading time.<br/><br/>
          Go to your <a href="https://console.aws.amazon.com/cloudfront/home" target="blank">CloudFront</a> and
          choose a distribution.
          <br/>
          As shown in the image below, click on "Behaviors", check the default behavior and click on "Edit". 
          Then you should see the option of "Compress objects automatically", check it.
          <br/>
        <div style={{maxWidth:"400px"}}>
          <Img fluid={data.placeholderImage5.childImageSharp.fluid} />
          </div>
          <br/>
          Next you have to configure your S3 CORS to accept compressed objects.<br/>
          Go to <a href="https://s3.console.aws.amazon.com/s3/home" target="blank">S3</a>, choose a bucket.
          Click on "Permissions", then go to "CORS configuration".
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage4.childImageSharp.fluid} />
          </div>
          <br/>
          Copy and paste the configuration below into the editor and click on "Save".
          <h5 style={{ backgroundColor: "rgb(50,50,50)", color: "white", fontWeight: "normal", padding: "10px", lineHeight: 1.5, margin:0 }}>
          {'<?xml version="1.0" encoding="UTF-8"?>'}<br/>
          {'<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">'}<br/>
          {"<CORSRule>"}<br/>
          {"<AllowedOrigin>*</AllowedOrigin>"}<br/>
          {"<AllowedMethod>GET</AllowedMethod>"}<br/>
          {"<MaxAgeSeconds>3000</MaxAgeSeconds>"}<br/>
          {"<AllowedHeader>Authorization</AllowedHeader>"}<br/>
          {"<AllowedHeader>Content-Length</AllowedHeader>"}<br/>
          {"</CORSRule>"}<br/>
          {"</CORSConfiguration>"}<br/>
          </h5>
          <br/>
          Now your script files should be compressed.
          <br/>
          <br/>
          <h3>2: Cache Control</h3>
          Do you have many images slowing down your website?
          Make sure that images load instantly when users re-visit your website.<br/><br/>
          In your <a href="https://s3.console.aws.amazon.com/s3/home" target="blank">S3</a> bucket,
          go to the folder that contains images.
          Select all images, under "Actions", click on "Change metadata". 
          Select "Cache Control" and put a value (i.e. max-age=604800 to save cache for 7 days).
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
          </div>
          <br/>
          <h3>3: Invalidation</h3>
          It's important to delete all the old settings and objects
          after making the above changes
          to have your users enjoy your faster website right away.<br/><br/>
          In your <a href="https://console.aws.amazon.com/cloudfront/home" target="blank">CloudFront</a> distribution,
          click on "Invalidations" then "Create Invalidation". 
          Here you're going to select all the paths (i.e /* and /images/*) you want to force update. Then click on "Invalidate".
          <br/>
          <div style={{maxWidth:"700px"}}>
          <Img fluid={data.placeholderImage3.childImageSharp.fluid} />
          </div>
          <br/>
          After about a minute... BAM! <br/>
          Your website will load much faster
          without any disruption to your users' experience!
          
          </h4>
        </div>
        <Link to="/">Go back to top</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
