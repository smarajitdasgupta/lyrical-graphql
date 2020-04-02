import './style/style.css'

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import SongDetail from './components/SongDetail'

const client = new ApolloClient({
  // takes every piece of data fetched by Apollo client
  // from backend and runs through this function
  // what is returned from this function is used to identify
  // that piece of data inside Apollo store
  // What this is doing is telling Apollo to use id to identify every piece of data
  // and keep track of it and tell React whenever something is updated
  // this only works when all id's are unique and available for all pieces of data
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList} />>
        </Route>
          <Route path="songs/new" component={CreateSong}></Route>
          <Route path="songs/:id" component={SongDetail}></Route>
        </Router>
      </ApolloProvider>
    </div>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
