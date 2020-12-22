import {combineReducers} from 'redux';
import metaReducer from "./metaReducer";
import {reducer as jPlayers} from 'react-jplayer';
import {reducer as jPlaylists} from 'react-jplaylist';

const rootReducer = combineReducers({
    meta: metaReducer,
    jPlayers,
    jPlaylists
});
export default rootReducer
