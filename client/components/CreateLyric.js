import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';
import createLyricMutation from "../mutations/createLyric";


class CreateLyric extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            },
            //   refetchQueries: [{ query: fetchSongQuery, variables: { id: this.props.songId } }]
        }).then(() => this.setState({ content: '' }))
            .catch(err => console.log(err));
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add a Lyric</label>
                <input
                    id="enter-new-lyric"
                    value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        </div>
    }
}

export default graphql(createLyricMutation)(CreateLyric);