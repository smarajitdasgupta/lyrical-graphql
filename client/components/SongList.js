import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Song List</h2>
                {this.props.data.loading ? <p>Loading... </p> :
                    <ul>
                        {this.props.data.songs.map((song) =>
                            <li key={song.id}>
                                {song.title}
                            </li>)}
                    </ul>
                }
            </div>
        )
    }
}

const query = gql`
  {
      songs{
        id
        title
    }
  }
`;

export default graphql(query)(SongList);