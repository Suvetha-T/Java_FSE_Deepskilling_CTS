import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return response.json();
            })
            .then(data => {
                const posts = data.map(post => 
                    new Post(post.userId, post.id, post.title, post.body)
                );
                this.setState({ posts });
            })
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, errorInfo) {
        alert(`Error occurred: ${error.toString()}`);
        console.error("Error Info: ", errorInfo);
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div className="error">Error: {error}</div>;
        }

        return (
            <div className="posts-container">
                <h1>Blog Posts</h1>
                {posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    posts.map(post => (
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Posts;