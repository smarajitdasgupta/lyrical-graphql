import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from "../mutations/likeLyric";


class LyricsListForSong extends Component {

    onLyricUpvote(lyricId) {
        this.props.mutate({
            variables: {
                id: lyricId
            }
        }).then()
            .catch(err => console.log(err));
    }

    render() {
        const { lyrics } = this.props;
        return <div>
            <h4>Lyrics</h4>
            <ul className="collection">
                {lyrics.map((lyric) =>
                    <li className="collection-item" key={lyric.id}>
                        {lyric.content}

                        <div className="vote-box">
                            <i className="material-icons"
                                onClick={() => this.onLyricUpvote(lyric.id)}
                            >
                                thumb_up
                                </i>
                            {lyric.likes}
                        </div>
                    </li>)}
            </ul>
        </div>
    }
}

export default graphql(likeLyricMutation)(LyricsListForSong);