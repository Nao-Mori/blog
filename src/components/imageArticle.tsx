import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = ({ num }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "post2/bird.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      img2: file(relativePath: { eq: "post2/unnamed.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      img3: file(relativePath: { eq: "post3/s3.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      img4: file(relativePath: { eq: "post2/duolingo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      img5: file(relativePath: { eq: "post5.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return <Img fluid={data[`img${num}`].childImageSharp.fluid} />
}

export default Image
