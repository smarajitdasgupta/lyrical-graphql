import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';
import createSongMutation from "../mutations/createSong";

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
            },
            // refetchQueries will update the UI as although mutation
            // happens in DB it doesn't reflect right away, we need to refresh without it
            // we are using refetchQueries because we are refreshing query in SongList component and CreateSong does not know about it
            refetchQueries: [{ query: fetchSongsQuery }]
        }).then(() => hashHistory.push('/'))
            .catch((err) => console.log(err))

    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h2>Create a New Song</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="enter-new-song">Song Title </label>
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

export default graphql(createSongMutation)(CreateSong);