import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from "../mutations/likeLyric";


class LyricsListForSong extends Component {

    onLyricUpvote(lyricId, lyricLikes) {
        this.props.mutate({
            variables: {
                id: lyricId
            },
            // https://www.apollographql.com/docs/react/performance/optimistic-ui/
            // Optimistic UI is a pattern that you can use
            // to simulate the results of a mutation and
            // update the UI even before receiving a response from
            // the server. Once the response is received from the
            // server, the optimistic result is thrown away and replaced
            // with the actual result.
            // improves perceived speed
            // run the actual mutation, copy the result
            // and substitute values with variables
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id: lyricId,
                    __typename: 'LyricType',
                    likes: lyricLikes + 1
                }
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
                                onClick={() => this.onLyricUpvote(lyric.id, lyric.likes)}
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