import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../components/parts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const data = {
  title: "77 Days of Duolingo... Was it waste of time?",
  tags: ["learning", "language", "Duolingo", "app", "study"],
  date: "4/25/2020"
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
          <h2>Motivation</h2>
          I moved to Germany this year, and I'm so eager to learn German. I am obsessed with how fast I learn...
          why? Who wants to spend years to learn a language??<br/><br/>
          Duolingo is a language learning app that is more of an old school app that is very popular.
          And it is often criticized for teaching sentences like "This person eats bread".<br/>
          However, I don't think it is bad since Language is always about arranging and combining what you know, right?
          At the end of the day, Duolingo is the most popular language learning app, why not give it a shot!
          
          <h2>Good's</h2>
          <h3>・Grammar / Vocabulary</h3>
            It's really good for begginers to understand basic grammar and achive vocabulary including some advanced words and sentence structures
            like "I would have done it if...".
            It doesn't necessarily teach you grammar in details like teachers do, however, having to see hundreds of examples, you will have a
            decent idea about grammar which is very important when learning languages.
            Especially, I'm very happy I know much better about articles, dative, accusative and all that ugly stuff in German.
            I have also achieved the ability to say whatever I want to say in everyday situation if I'm given enough time.
            <br/>
            <br/>
            <h3>・Free but still good</h3>
            And it's totally effective without spending any money.
            Even though making 5 mistakes stops you progress a course, which didn't happen to me offen, by playing "practice mode" which is basically the same as taking a course
            will get you back to your course.
            <br/>
            <br/>
            <h3>・Competition</h3>
            They have a little ranking system that you will compete with about 50 other players on how much you learn.
            Even though there are things I would change and add it's low key motivating!
          <h2>Bad's</h2>
          <h3>・Listening</h3>
            What I found very underwhelming was that my listening skill has barely improved.
            I still struggle understanding basic sentences in real life conversations.
            It is due to the fact that Duolingo doesn't really challenge you to understand things only by listening.

            If you want to improve your listening skills Duolingo is not it.
            I think that if you use the app while going to a language school, it will be very effective.
            <br/>
            <br/>
            <h3>・Glitchy ads</h3>
            There's some technical issues like some of the adds pause automatically to force you interact with the advertised app.
            (probably not Duolingo's fault) and sometimes ads did't show properly and I had to restart the app.
            <br/>
            <br/>
            <h3>・Not for everyone</h3>
            I think that their English-to-German course which I took is one of the best courses that they have to offer.
            However, I really don't think it's a good idea to learn Asian languages due to the fact
            that western languages' subject-action-object kind of structure doesn't translate well to an Asian language
            For example, in Japanese, cutting a sentence into pieces and match every single one of them with an English word isn't easy to do.
          <h2>Was it waste of time?</h2>
            No at all! 
            When I tried to read the description of frozen food in German yesterday, I realized that I understand most of the words
            even though it takes sometime to understand the whole context.
            Like I said before, if you are fluent in one of the western languages and willing to learn another western language,
            it is definitely a great option especially when start from zero.
            The next step for me will be talking to native speakers and watch YouTube videos which I'm very excited about.
            I'll update my German learning sometime in the future, bye!
          <br/>
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
