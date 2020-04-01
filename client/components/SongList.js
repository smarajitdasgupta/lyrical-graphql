import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongsQuery from '../queries/fetchSongs';
import deleteSongsMutation from "../mutations/deleteSong";


class SongList extends Component {

    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id
            }
        })
            .then(() => this.props.data.refetch())
        // refetch will update the UI as although mutation
        // happens in DB it doesn't reflect right away, we need to refresh without it
        // we are using this.props.data.refetch() because we are refreshing data in this current SongList component
        // refetchQueries can also be used here like in CreateSong component
    }

    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                <h2>List of songs</h2>
                {data.loading ? <p>Loading... </p> :
                    <ul className="collection">
                        {data.songs.map(song =>
                            <li key={song.id} className="collection-item">
                                <Link to={`/songs/${song.id}`}>
                                    {song.title}</Link>
                                <i className="material-icons"
                                    onClick={() => this.onSongDelete(song.id)}
                                >
                                    delete
                                </i>
                            </li>)}
                    </ul>
                }
                <Link to="/songs/new"
                    className="btn-floating btn-large red right">
                    <i className="material-icons">add</i></Link>
            </div>
        )
    }
}

export default graphql(deleteSongsMutation)(
    graphql(fetchSongsQuery)(SongList)
);

