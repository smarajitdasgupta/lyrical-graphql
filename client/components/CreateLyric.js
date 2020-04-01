import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class CreateLyric extends Component {
    render() {
        return <div>
            <form>
                <label>Add a Lyric</label>
                <input />
            </form>
        </div>
    }
}

export default CreateLyric;