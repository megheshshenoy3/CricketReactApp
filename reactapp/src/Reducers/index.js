import Match from './Match'
import Country from './Country'
import Player from './Player'
import Venue from './Venue'
import Sidebar from './Sidebar'
import Tournamentinfo from './TournamentInfo'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    matchfixturesinfo:Match,
    countryinfo:Country,
    playerinfo:Player,
    tournamentinfo:Tournamentinfo,
    venue:Venue,
    sidebar:Sidebar
})
export default allReducers;