import React from "react"
import { Link } from "gatsby"

const Articles:{ 
    title: string,
    body: string,
    tags: Array<string>,
    date: string
}[] = [
  {
    title: "How I learned English in One Year",
    body: "",
    tags: [],
    date: "5/2/2020"
  },
  {
    title: "77 Days of Duolingo... Was it a waste of time?",
    body: "I moved to Germany this year, and I'm so eager to learn German. I am obsessed with how fast I learn... "+
    "why? Who wants to spend years to learn a language?? " +
    "Duolingo is a language learning app that is more of an old school app that is very popular. " +
    "And it is often criticized for teaching sentences like 'This person eats bread",
    tags: ["learning", "language", "Duolingo", "app", "study", "German", "English"],
    date: "4/25/2020"
  },
  {
    title: "Make your AWS website load faster in 1 minute (S3 / CloudFront)",
    body:
    "It's important to save your users' time and data for a better user experience. " +
    "Here are steps to make your AWS S3 / CloudFront websites load significantly faster " +
    "even if you finished deploying and you don't want to make changes to your project. ",
    tags: ["AWS", "S3", "CloudFront", "website", "deployment"],
    date: "3/26/2020"
  },
  {
      title: "How I Turned my ADHD Tendencies into my Strengths",
      body: 
        "There are good days where you are so focused and spend the entire day being so productive. However, " +
        "there are also bad days where you are just being stressed by your tasks and waste your time. " +
        "How can you make every day a good day? There are tips to do that.",
      tags: ["ADHD", "productivity", "motivation", "work"],
      date: "3/14/2020"
  },
  {
      title: "Why I choose not to live in Japan (People / Culture)",
      body:
        "I was born in Kyoto (Japan) and moved to Tokyo (Japan) as I entered a high school. " +
        "Last year I graduated university and decided to move to Germany this year. " +
        "Before getting to the point I just want to clarify that I love Japan, " +
        "and it is one of my favorite cities to travel. If I had to stay in Japan I would still enjoy living there.",
      tags: ["life", "Japan", "culture", "people"],
      date: "3/4/2020"
  }
]

const Intro = () => (
  <div style={{ minWidth:"300px", padding:"0 10px", display: "flex", flexWrap:"wrap", width:"100%", maxWidth:"1400px", justifyContent:"center" }}>
    {Articles.map((article, key)=>{
      return (
        <Link  to={`post${Articles.length - key}`} key={key} style={{ color:"black", textDecoration:"none", margin:"10px 5px", padding:"0 5px" }}>
        <div
          className="article"
          style={{
            maxWidth:"330px",
            minWidth:"250px",
            boxShadow:"5px 10px 10px rgba(0,0,0,0.4)",
            padding:"20px",
            borderRadius:"5px",
            height:"320px",
            overflow:"hidden",
            position:"relative",
          }}
        >
          <h3 style={{ color:"rgb(60,60,60)", margin: 0 }}>{article.title}</h3>
          <h6 style={{ textAlign:"right", margin:"10px 0", color:"gray" }}>{article.date}</h6>
          <h4 style={{ color:"rgb(90,90,90)", lineHeight:"1.4" }}>{article.body}</h4>
          <div style={{bottom:0, left: 0, position:"absolute",width:"100%", backgroundColor:"rgba(0,0,0,0.4)", display:"flex",flexWrap:"wrap", padding:"8px"}}>
            {article.tags.map((tag, key)=>(
            <h5 key={key} style={{backgroundColor:"rgb(255,255,250)", margin:"2px 5px", padding:"3px 5px", borderRadius:"3px"}}>{tag}</h5>
            ))}
          </div>
        </div>
        </Link>
      )
    })}
  </div>
)

export default Intro