import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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