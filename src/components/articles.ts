export const Articles:{ 
    title: string,
    body: string,
    tags: Array<string>,
    date: string
}[] = [
  {
    title: "Simplest Way to Achieve Blurry Loading Images on your React App without any Libraries",
    body: "When providing high quality images to users especially the ones with slower internet, " +
    "it's important to tell them that images are being loaded. So I'm gonna share how to display blurry images while loading the actual images " +
    "on React app withou any plugins / libraries just like I did in ",
    tags: ["react","react hooks","image","loading","UX"],
    date: "5/15/2020"
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