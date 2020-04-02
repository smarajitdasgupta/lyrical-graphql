import React, { Component } from 'react';

class LyricsListForSong extends Component {

    render() {
        const { lyrics } = this.props;
        return <div>
            <h4>Lyrics</h4>
            <ul className="collection">
                {lyrics.map((lyric) =>
                    <li className="collection-item" key={lyric.id}>
                        {lyric.content}
                    </li>)}
            </ul>
        </div>
    }
}

export default LyricsListForSong;