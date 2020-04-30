import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../components/parts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const data = {
  title: "",
  tags: [],
  date: "5/2/2020"
}

const SecondPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "post2/duolingo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return(
    <Layout>
      <Wrapper data ={data} >
        <Img fluid={photo.img.childImageSharp.fluid} />
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
