import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../components/parts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const data = {
  title: "Why I choose not to live in Japan (People / Culture)",
  tags: ["people", "culture", "Japan", "life"],
  date: "3/4/2020",
}

const Post = () => {
  const photo = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "post2/bird.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
  <Layout>
    <Wrapper data={data} >
      <Img fluid={photo.img.childImageSharp.fluid} />
      <br/>
        I was born in Kyoto (Japan) and moved to Tokyo (Japan) as I entered a high school.
        Last year I graduated university and decided to move to Germany this year.
        <br/><br/>
        Before getting to the point I just want to clarify that I love Japan,
        and it is one of my favorite countries to travel.
        If I had to stay in Japan I would still enjoy living there.
        <br/><br/>
        Points that will be made are only based on my personal experiences and opinions.
        And I will compare Japan to Germany a bit.
        <br/>
        <h2>GIRLS' WORLD</h2>
          Living my college life, I have always felt the pressure that I have to at least try to look better especially as a girl.
          Don't get me wrong I love makeup and fashion. But I wear makeup or dress up nice when I want to.
          <br/>
          <br/>
          People decide who they wanna be friends with based on their looks.
          The terrifying thing is that it is not only about a high schools, it is also about UNIVERSITIES...!
          <br/>
          <br/>
          You don't have to be the cutest girl but you at least have to try to look prettier to others.
          Otherwise you will get the classic "You'd be so much cuter with make up" or "You should wear something pink".
          <br/>
          <br/>
          Many of them have a hard time understanding a girl like me that's very inconsistent on her looks.
          It's freeing to see girls dressed up very casually in shopping malls over here in Germany.
          <br/>
        <h2>"JOSHIRYOKU"</h2>
          There's a word "Joshiryoku" (女子力) which can be translated to "Girl power".
          It's not about women's empowerment but often about how well you can cook,
          how many beauty producs you have, how cute your nails are, and everything superficial that makes a girl "Girly".
          <br/><br/>
          Being such a well known and iconic word to describe a girl it only started being used a few years ago widely.
          Every time I hear this word I roll my eyes but can't do that anymore because you will hear that from EVERYONE...
          <br/>
        <h2>FAKENESS</h2>
          It is hard to make real friends in Japan.
          I had so many people saying "We should have to hang out soon". 
          90% of them never contacted me.
          <br/>
          <br/>
          One of the positive experinces I have had in Germany is that
          I can actually take people's words seriously.
          Germans might seem cold at first but it only tells that they are true to their feelings.
          (I mean who'd be so excited to meet a complete stranger? lol)
          <br/>
          <br/>
          As they are honest, you can count on them actually saying "Let's hangout soon."
          because it is not lightly used.
          If you tell them "Let's hang out soon" and they do NOT want to hang out with you, they often won't simply respond to you.
          Which is still better than "Sorry I'm busy, maybe next time!" which leads you to waste more energy.
      </Wrapper>
  </Layout>
  )
}

export default Post
