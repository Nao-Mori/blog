export const Articles:{ 
    title: string,
    body: string,
    tags: Array<string>,
    date: string
}[] = [
    {
      title: "Make your AWS website load faster in 1 minute (S3 / CloudFront)",
      body:
        "It's important to save your users' time and data for a better user experience. " +
        "there are things you can try to make your AWS S3 / CloudFront websites load significantly faster that Amazon doesn't set up for you in the default settings, " +
        "even if you finished deploying and you don't want to make changes to your project, " +
        "1. Compress Objects",
      tags: ["AWS", "S3", "CloudFront", "coding"],
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
        tags: ["life", "Japan", "Germany", "food", "people"],
        date: "3/4/2020"
    }
  ]