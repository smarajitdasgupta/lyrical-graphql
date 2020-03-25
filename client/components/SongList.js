import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                <h2>List of songs</h2>
                {data.loading ? <p>Loading... </p> :
                    <ul>
                        {data.songs.map(song =>
                            <li key={song.id} className="collection-item">
                                {song.title}
                            </li>)}
                    </ul>
                }
                <Link to="/songs/new"
                    className="btn-floating btn-large red light">
                    <i className="material-icons">add</i></Link>
            </div>
        )
    }
}

export default graphql(fetchSongsQuery)(SongList);