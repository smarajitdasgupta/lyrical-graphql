import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // console.log(this.props);
        // mutate returns a promise, so we can chain it
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(() => hashHistory.push('/'))
            .catch((err) => console.log(err))

    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="enter-new-song">Song Title: </label>
                    <input
                        id="enter-new-song"
                        onChange={event =>
                            this.setState({
                                title: event.target.value
                            })}
                        value={this.state.title} />
                </form>
            </div>
        )
    }
}

const mutation = gql`
        mutation AddSong($title: String) {
	        addSong(title: $title){
                id
                title
            }
        }
    `;

export default graphql(mutation)(CreateSong);