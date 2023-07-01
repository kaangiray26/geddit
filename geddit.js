class Geddit {
    constructor() {
        this.host = "https://www.reddit.com",
            this.parameters = {
                limit: 12,
                after: null,
                count: null,
                show: null,
                t: null
            }
    }

    async getHot(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/hot.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getBest(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/best.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getTop(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/top.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getNew(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/new.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getRising(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/rising.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getControversial(subreddit = null, options = this.parameters) {
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/controversial.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainHot(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/hot.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainBest(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/best.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainTop(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/top.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainNew(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/new.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainRising(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/rising.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDomainControversial(domain, options = this.parameters) {
        return await fetch(this.host + "/domain/" + domain + "/controversial.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                posts: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getSubreddit(subreddit) {
        return await fetch(this.host + "/r/" + subreddit + "/about.json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getSubredditRules(subreddit) {
        return await fetch(this.host + "/r/" + subreddit + "/about/rules.json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getSubredditModerators(subreddit) {
        return await fetch(this.host + "/r/" + subreddit + "/about/moderators.json")
            .then(res => res.json())
            .then(json => json.data)
            .then(data = ({
                users: data.children
            }))
            .catch(err => null);
    }

    async getSubredditWikiPages(subreddit) {
        return await fetch(this.host + "/r/" + subreddit + "/wiki/pages.json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getSubredditWikiPage(subreddit, page) {
        return await fetch(this.host + "/r/" + subreddit + "/wiki/" + page + ".json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getSubredditWikiPageRevisions(subreddit) {
        return await fetch(this.host + "/r/" + subreddit + "/wiki/revisions" + page + ".json")
            .then(res => res.json())
            .then(json => json.data.children)
            .catch(err => null);
    }

    async getPopularSubreddits(options = this.parameters) {
        return await fetch(this.host + "/subreddits/popular.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                subreddits: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getNewSubreddits(options = this.parameters) {
        return await fetch(this.host + "/subreddits/new.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                subreddits: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getPremiumSubreddits(options = this.parameters) {
        return await fetch(this.host + "/subreddits/premium.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                subreddits: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getDefaultSubreddits(options = this.parameters) {
        return await fetch(this.host + "/subreddits/default.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                subreddits: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getPopularUsers(options = this.parameters) {
        return await fetch(this.host + "/users/popular.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                users: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getNewUsers(options = this.parameters) {
        return await fetch(this.host + "/users/new.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                users: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async searchSubreddits(query, options = this.parameters) {
        options.q = query;
        return await fetch(this.host + "/subreddits/search.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                subreddits: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async searchUsers(query, options = this.parameters) {
        options.q = query;
        return await fetch(this.host + "/users/search.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                users: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async search(query, subreddit = null, options = this.parameters) {
        options.q = query;
        subreddit = subreddit ? "/r/" + subreddit : "";
        return await fetch(this.host + subreddit + "/search.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data)
            .then(data => ({
                after: data.after,
                results: data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getSubmission(id) {
        return await fetch(this.host + "/by_id/" + id + ".json")
            .then(res => res.json())
            .then(json => json.data.children[0].data)
            .catch(err => null);
    }

    async getSubmissionComments(id, options = this.parameters) {
        return await fetch(this.host + "/comments/" + id + ".json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => ({
                submission: json[0].data.children[0].data,
                comments: json[1].data.children.map(child => child.data)
            }))
            .catch(err => null);
    }

    async getSubredditComments(subreddit, options = this.parameters) {
        return await fetch(this.host + "/r/" + subreddit + "/comments.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }

    async getUser(username) {
        return await fetch(this.host + "/user/" + username + "/about.json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getUserComments(username, options = this.parameters) {
        return await fetch(this.host + "/user/" + username + "/comments.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }

    async getUserSubmissions(username, options = this.parameters) {
        return await fetch(this.host + "/user/" + username + "/submitted.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }

    async getLiveThread(id) {
        return await fetch(this.host + "/live/" + id + "/about.json")
            .then(res => res.json())
            .then(json => json.data)
            .catch(err => null);
    }

    async getLiveThreadUpdates(id, options = this.parameters) {
        return await fetch(this.host + "/live/" + id + ".json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }


    async getLiveThreadContributors(id, options = this.parameters) {
        return await fetch(this.host + "/live/" + id + "/contributors.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children)
            .catch(err => null);
    }

    async getLiveThreadDiscussions(id, options = this.parameters) {
        return await fetch(this.host + "/live/" + id + "/discussions.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }

    async getLiveThreadsNow(options = this.parameters) {
        return await fetch(this.host + "/live/happening_now.json?" + new URLSearchParams(options))
            .then(res => res.json())
            .then(json => json.data.children.map(child => child.data))
            .catch(err => null);
    }
}

export { Geddit }