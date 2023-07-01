# geddit
Reddit's public API without authentication 

## Install
If you want to use this in your project, there are prebuilt versions available.
* [geddit.min.js](geddit.min.js) - Minified version

Import via the GitHub Pages URL:
```
https://kaangiray26.github.io/geddit/geddit.min.js
```

## Examples
```
import { Geddit } from './geddit.js';
const g = new Geddit();

// Get the top 10 posts from r/AskReddit
let posts = await g.getTop('AskReddit', {
    limit: 10
})

console.log(posts);
```

## How it works
Reddit has an undocumented feature that allows you to get data from their servers as RSS/JSON feeds. Geddit wraps around several endpoints to make it easier to get data from Reddit. This means that you can use Geddit to get data from Reddit without authentication, which is only suitable for getting public data.

## Why use this?
* No authentication required
* Get data without dealing with application IDs and secrets
* NSFW content is allowed

## Methods
Here are the methods that are available in Geddit. All methods return a promise that resolves to the data from Reddit. Methods are categorized by the source of the data.

### Submissions
* getSubmission(ID)
* getSubmissionComments(ID, options)
* getHot(subreddit, options)
* getBest(subreddit, options)
* getTop(subreddit, options)
* getNew(subreddit, options)
* getRising(subreddit, options)
* getControversial(subreddit, options)

### Domain specific submissions
* getDomainHot(domain, options)
* getDomainBest(domain, options)
* getDomainTop(domain, options)
* getDomainNew(domain, options)
* getDomainRising(domain, options)
* getDomainControversial(domain, options)

### Subreddits
* getSubreddit(subreddit)
* getSubredditComments(subreddit, options)
* getSubredditRules(subreddit)
* getSubredditModerators(subreddit)
* getSubredditWikiPages(subreddit)
* getSubredditWikiPage(subreddit, page)
* getSubredditWikiPageRevisions(subreddit, page)
* getPopularSubreddits(options)
* getNewSubreddits(options)
* getPremiumSubreddits(options)
* getDefaultSubreddits(options)
  
### Users
* getUser(username)
* getUserComments(username, options)
* getUserSubmission(username, options)
* getPopularUsers(options)
* getNewUsers(options)

### Search
* searchAll(query, subreddit, options)
* searchSubreddits(query, options)
* searchUsers(query, options)

### Live threads
* getLiveThread(ID)
* getLiveThreadUpdates(ID, options)
* getLiveThreadContributors(ID, options)
* getLiveThreadDiscussions(ID, options)
* getLiveThreadsNow(options)

## Contribution
If you discover a new endpoint that is not in the list above, feel free to open an issue or a pull request.