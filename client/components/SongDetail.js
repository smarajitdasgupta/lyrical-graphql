import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSong from '../queries/fetchSong';
import CreateLyric from '../components/CreateLyric';

const SongDetail = (props) => {
    console.log(props.data)

    const { song } = props.data;
    if (!song) {
        return <div>Loading...</div>;
    }

    return <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <CreateLyric></CreateLyric>
    </div>
}

// react router looks at the url, parses the url and passes the id via props
// graphql helper knows the props before SongDetail component
// we pass an options object to graphql helper which takes props
// and returns variables object that is provided to the graphql query
// in this case the id from url via props.params

export default graphql(fetchSong, {
    options: (props) => {
        return {
            variables: { id: props.params.id }
        }
    }
})(SongDetail);