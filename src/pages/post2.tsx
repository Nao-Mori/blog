import React from "react"
import { Wrapper } from "../components/parts"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const data = {
  title: "How I Turned my ADHD Tendencies into my Strengths",
  tags: ["ADHD", "productivity", "motivation", "work"],
  date: "3/14/2020"
}

const SecondPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "post2/unnamed.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
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
    <br/><br/>
          There are good days where you are so focused and spend the entire day being so productive. However,
          there are also bad days where you are just being stressed by your tasks and waste your time.
          <br/>
          <br/>
        <h2>I TUNRED THESE ISSUES...</h2>
          1. Handling multiple tasks freaks me out and I end up doing nothing.
          <br/>
          2. I suddenly lose concentration and a 'little break' never ends.
          <br/>
          3. When someone talks to me in the middle of something I get bothered.
        <br/>
        <br/>
        <h2>INTO THESE STRENGTHS!</h2>
          1. Be a perfectionist and work efficiently.
          <br/>
          2. Be very focused and also result-focused.
          <br/>
          3. Be a great communicator and more responsible.
        <br/>
        <br/>
        <h2>HOW DID I DO THAT?</h2>
          It is always important to think about why I face these problems.<br/>
          After researching and talking to my therapist, here are the solutions that worked for me.
          <br/>
          <br/>
          <h2>1. Have deadlines for everything and talk about plans.</h2>
          Issue: Handling multiple tasks freaks me out and I end up doing nothing.
          <br/>
          <br/>
          In other words, my issue is that when I know I have more than 1 task, I'm in trouble.
          It's actually simple to do all the tasks one by one if I have enough time. It's never impossible.
          <br/>
          The thought that's messing up my mind is the fact that I don't know exactly when to start and finish each task.<br/><br/>
          To make it easier, I write down my task in details and the time I expect it to be finished.
          If I feel like my task is too big, I break it down to the point that I can handle it in the next 4 hours at most.<br/><br/>
          If I am overwhelmed by a task that is coming up and I get demotivated,
          I tell my co-workers, friends or family about it and how I think I will be dealing with it in details.
          That will make me realize, that my brain is only overwhelmed by my fantasy.
          <br/>
          <br/>
          <h2>2. Stay exactly where you are</h2>
          Issue: Suddenly lose concentration and a 'little break' never ends
          <br/>
          <br/>
          It's not about a lunch break or actual rest for your eyes and hands,
          it's mainly about being on the phone, scrolling through your favorite social media, watching videos or playing mobile games.<br/><br/>
          I learned that if I get tempted to touch my phone I should just do it. 
          Once I'm out of focus it's really hard to let the temptation go away and it only makes me more distracted.<br/><br/>
          My solution is very specific. I should not stand up and go somewhere to take a break. Instead, 
          I stay exactly where I work, keep one of my hands on the laptop and make sure I can go back to work as soon as I want.
          Then I can put my phone on the desk and do whatever I want to do.
          (I don't recommend to use the same laptop you work with to have a little break)<br/><br/>
          Since I never stop thinking about working this way, I end up going back to work after a few minutes.
          <br/>
          <br/>
          <h2>3. Tell people to write or use force.</h2>
          Issue: When someone talks to me in the middle of something I freak out and act like I understand what they say.<br/><br/>
          It is really difficult for me to stop what I am doing to listen to someone with focus.
          Even though I look like I'm listening, I'm still thinking about my current task.
          <br/>
          <br/>
          Tell them to write an Email or give them a piece of paper and a pen and tell them to do the same in the future.<br/><br/>
          What if it's an emergency? Kick the chair and stand up. I know it's scary to lose what is in your mind.
          But trust me by doing so you can get out of your state temporarily and it's not that hard to go back to what you were doing afterwards.
    </Wrapper>
  </Layout>
  )
}

export default SecondPage
