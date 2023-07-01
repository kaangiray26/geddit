import { Geddit } from "./geddit.js"

const g = new Geddit();

// Get the top 10 posts from r/AskReddit
let posts = await g.getTop('AskReddit', {
    limit: 10
})

console.log(posts);