import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: {
            title: '',
            author: '',
            content: ''
        }
    }

    // componentWillMount() {
    //     console.log('postID  = ', this.props.postId);
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
    //         .then((response) => {
    //             console.log(response);
    //             this.setState(
    //                 {
    //                     post: response.data[0]
    //                 }
    //             )
    //         }).catch ( reason => {
    //             console.log(reason);
    //         })

    // }

    render() {
        let post = <p>Please select a Post!</p>;
        if (this.props.postId) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );   
        }
        return post;
    }
}

export default FullPost;