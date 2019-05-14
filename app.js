const posts = [{
        title: 'Amazing new framework!!!',
        summary: 'Why you must start using Explode.js IMMEDIATELY!',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/any'
    },
    {
        title: 'Understanding the Event Loop',
        summary: 'This post will change your life.',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/nature'
    },
    {
        title: 'No seriously, what is a $%*# is a promise?',
        summary: 'Understanding callback heck and why you must avoid it.',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/tech'
    },
];

let isNull = function(str) {
    return str === null || str.match(/^ *$/) !== null;
}

new Vue({
    el: '#app',
    data: {
        title: '',
        summary: '',
        posts: posts,
        error: ''
    },
    methods: {
        increment: function(post) {
            post.votes += 1;
        },
        decrement: function(post) {
            post.votes -= 1;
        },
        createNew: function() {
            let title = this.title;
            let summary = this.summary;

            if (!isNull(title) && !isNull(summary)) {
                this.posts.push({
                    title,
                    summary,
                    votes: 0,
                    thumbnail: 'https://placeimg.com/75/75/any'
                });
                this.title = '';
                this.summary = '';
            } else {
                alert('Title and Summary Cannot Be Blank! Please enter a value!')
            }
        }
    },
    computed: {
        orderedList: function() {
            return this.posts.sort((currentPost, nextPost) => {
                if (nextPost.votes != currentPost.votes) {
                    return nextPost.votes - currentPost.votes;
                } else {
                    let next = nextPost.title.toUpperCase();
                    let current = currentPost.title.toUpperCase();
                    return (next < current) ? 1 : (next > current) ? -1 : 0;
                }
            });
        }
    }
})