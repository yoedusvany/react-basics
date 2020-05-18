import React, { Component } from 'react'
import Axios from 'axios'
import User from './User';

export default class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: 'Error retreiving data'
        }
    }
    
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            }).catch(error => {
                console.log(error);
                
                this.setState({errorMsg: error})
            })
    }

    render() {
        const {errorMsg} = this.state

        const postList = this.state.posts.length
            ? this.state.posts.map(post => <User key={post.id} title={post.title} body={post.body}></User>) 
            : <div>{errorMsg}</div>

        return (
            <div>
                {postList}
            </div>
        )
    }
}
