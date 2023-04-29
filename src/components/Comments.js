import React, {Component} from 'react';
import placeholderService from "../services/placeholder.service";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        placeholderService.getComments()
            .then(data => data.data)
            .then(data => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                <h2>Comments:</h2>
                <br/>
                {
                    this.state.comments?.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)
                }
            </div>
        );
    }

}

export default Comments;