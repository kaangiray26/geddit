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

## Methods

## How it works
Reddit has an undocumented feature that allows you to get data from their servers as RSS/JSON feeds. Geddit wraps around several endpoints to make it easier to get data from Reddit. This means that you can use Geddit to get data from Reddit without authentication, which is only suitable for getting public data.