import React, {Component} from 'react';
import placeholderService from "../services/placeholder.service";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        placeholderService.getPosts()
            .then(data => data.data)
            .then(data => this.setState({posts: data}));
    }
    render() {
        return (
            <div>
                <h2>Posts:</h2>
                <br/>
                {
                    this.state.posts?.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)
                }
            </div>
        );
    }
}

export default Posts;