import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = ({name}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage2: file(relativePath: { eq: "pic7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage3: file(relativePath: { eq: "pic4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage4: file(relativePath: { eq: "pic5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage5: file(relativePath: { eq: "pic6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image
