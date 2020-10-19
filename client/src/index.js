import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoPlaylistComponent from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import {reducer as jPlayers} from 'react-jplayer';
import {reducer as jPlaylists} from 'react-jplaylist';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeComponent from "./components/homecomponent";

const store = createStore(combineReducers({ jPlayers, jPlaylists }));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/player" exact component={VideoPlaylistComponent} />
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
