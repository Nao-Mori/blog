import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../components/parts"

const data = {
  title: "77 Days of Duolingo... Was it waste of time?",
  tags: ["learning", "language", "Duolingo", "app", "study"],
  date: "4/26/2020"
}

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
      <Wrapper data ={data} >
          <h2>Motivation</h2>
          I move to Germany this year, and I'm so eager to learn German and obsessed with how fast I learn. 

          Duolingo is a language learning app that is more of an old school app that is very popular.
          And it is often criticized for teaching sentences like "This person eats bread".
          <h2>Good's</h2>
            It's really good for begginers to understand basic grammar and achive vocabulary including some advanced words and sentence structures
            like "I would have done it".
            It doesn't necessarily teach you grammar in details like teachers do, however, having to see hundreds of examples, you will have a
            decent idea about grammar which is very important when learning languages.

            And
          <h2>Bad's</h2>
            The development of my listening skill was a bit underwhelming.
            Because I'm too used to hearing the "Duolingo voice".
            If you want to improve your listening skills Duolingo is not it.
            Spending 77 days I'm in an awkward place that I know a lot but cannot have a conversation.
            I think that if you use the app while going to a language school will be very effective.

            There's some technical issues like some of the adds pause automatically to force you interact with the advertised app.
            (probably not Duolingo's fault) and sometimes ads did't show properly and I had to restart the app.

            Also to learn Asian languages it's definitely not the best language

            I think that their English-to-German course which I've taken is one of the best courses that they have to offer.
            However, I really don't think it's a good idea to learn Asian languages especially Japanese due to the fact
            that western languages' subject-action-object kind of structure doesn't translate well to an Asian language
            In Japanese cutting a sentence into pieces and match every single one of them with a English word isn't easy to do.
          <h2>Was it waste of time?</h2>
            No at all! 
            When I tried to read the description of frozen food in German yesterday, I realized that I understand most of the words
            even though I still struggle to understand the whole context.
            Like I said before if you are fluent in one of the western languages and willing to learn another western language,
            it is definitely effective especially when start from zero.

            So the next step for me will be talking to native speakers and watch YouTube videos which I'm very excited about.
            I'll update my German learning sometime in the future, bye!
          <br/>
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
