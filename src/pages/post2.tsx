import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="How I Turned my ADHD Tendencies into my Strengths" />
    <div style={{maxWidth:"750px", margin:"50px auto", padding:"0 15px"}}>
      <div>
        <h1 style={{textAlign:"left"}}>How I Turned my ADHD Tendencies<br/> into my Strengths</h1>
        <h5 style={{textAlign:"right", color:"gray", marginRight:"30px"}}>3/14/2020 by Nao Mori</h5>
        <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
          There are good days you are so focused and spend the entire day being so productive. However,
          there are also bad days just being stressed by your tasks and waste your time.
          How can you make everyday your good day? There are tips to do that.
        </h4>

        <h2 style={{fontWeight:"bolder"}}>I TUNRED THESE ISSUES...</h2>
        <h4 style={{fontFamily:"Arial", fontWeight:"normal",lineHeight: 2}}>
          1. Handling multiple tasks freaks me out and end up doing nothing.
          <br/>
          2. Suddenly loses concentration and a 'little break' never ends.
          <br/>
          3. When someone talks to me in the middle of something I freak out and act like I understand what they say.
        </h4>
        <br/>
        <h2 style={{fontWeight:"bolder"}}>INTO THESE STRENGTHS!</h2>
        <h4 style={{fontFamily:"Arial", fontWeight:"normal",lineHeight: 2}}>
          1. Be a perfectionist and work efficiently.
          <br/>
          2. Be very focused and also result-focused.
          <br/>
          3. Be a great communicator and more responsible.
        </h4>
        <br/>
        <h2 style={{fontWeight:"bolder"}}>HOW DID I DO THAT?</h2>
        <h4 style={{fontWeight:"normal", fontFamily:"Arial", lineHeight: 1.5}}>
          It is always important to think about why I face these problems.<br/>
          After researching and talking to my therapist, here are the solutions that worked for me.
          <br/>
          <br/>
          <strong style={{fontFamily:"Arial"}}>1. Have deadlines for everything and talk about plans.</strong>
          <br/>
          Issue: Handling multiple tasks freaks me out and end up doing nothing.<br/><br/>
          In other words, "when I know I have more than 1 task, I'm in trouble".
          You know it's actually simple if you did all the tasks one by one you have enough time and it's never impossible.
          <br/>
          The thought that's messing up my mind is the fact that I don't know exactly when to start and finish each task.<br/><br/>
          For example, what I do is writing down your task in details and the time you expect it to be finished.
          If you feel like your task is too big, break it down to the point you can handle it in the next 4 hours at most.<br/><br/>
          And if you are overwhelmed by a task that is coming up and you get demotivated,
          tell your co-workers, friends or family about your task and how you think you will be dealing with it in details.
          That will make you realize that your brain is only overwhelmed by your fantasy.
          <br/>
          <br/>
          <strong style={{ fontFamily: "Arial" }}>2. Never stop thinking about the task.</strong>
          <br/>
          Issue: Suddenly loses concentration and a 'little break' never ends.<br/><br/>
          It's not about a lunch break or actual rest for your eyes and hands,
          it's mainly about being on the phone, scrolling through your favorite social media, watch videos or play mobile games.<br/><br/>
          I learned that if I get tempted to touch my phone I just should do it.
          My solution is very specific. I stay where I work and keep the position I work in, put the phone on the desk
          and do whatever. (I don't recommend to use the same laptop you work with to have a little break) Make sure
          that you can still see what you are working on on the screen. <br/><br/>
          Since I am really bad at doing 2 things at the same time, 
          I end up just going back to work since working is in my main focus.
          <br/>
          <br/>
          <strong style={{ fontFamily: "Arial" }}>3. Tell people to write or use force.</strong>
          <br/>
          Issue: When someone talks to me in the middle of something I freak out and act like I understand what they say.<br/><br/>
          It is really difficult for me to stop what I am doing to listen to someone with focus.
          Even though I look like I'm listening, I'm still thinking about my current task.
          <br/>
          <br/>
          Tell them to write an Email or give them a piece of paper and a pen and tell them to do the same in the future.<br/><br/>
          What if it's an emergency? Kick the chair and stand up. I know it's scary to lose what is in your mind.
          But trust me by doing so you can get out of your state temporarily and it's not that hard to go back to what you were doing afterwards.
        </h4>
      </div>
      <Link to="/">Go back to top</Link>
    </div>
  </Layout>
)

export default SecondPage
