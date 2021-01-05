import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TournamentDetails from './Components/TournmentTable/TournamentInfo/TournamentinfoMain'
import { TournamentInfo } from './Actions'
import { Venueinfo } from './Actions'
import Players from './Components/PlayerList/PlayerMain.js';
import MatchDetails from './Components/MatchDetailsComponent/MatchDetailMainComponent'
import Fixtures from './Components/FixturesandResults/FixtureMain';
import TournamentInfoComp from './Components/TournmentTable/TournamentTableMain';
import BlackScreen from './Components/Sidebar/BlackScreen'
import PlayerProfile from './Components/PlayersProfile/PlayerProfileMain'
import Venues from './Components/Venues/Venues'
import { Matchinfo, Playerinfo, Countryinfo } from './Actions'
import CountriesComp from './Components/Countries/CountriesMain'
import Sidebar from './Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
function App(props) {
  const dispatch = useDispatch();
  let matchdata = useSelector(state => state.matchfixturesinfo)
  const [playerdata, changePlayerdata] = useState()
  const [showblackscreen, changescreen] = useState(false)
  useEffect(() => {
    axios.get('/countryinfo').then(result => {
      dispatch(Countryinfo(result.data))
      console.log(result.data)
    })
    axios.get('/playerinfo').then(result => {
      dispatch(Playerinfo(result.data))
      console.log(result.data)
      changePlayerdata(result.data)
    })
    axios.get('/matchinfo').then(result => {
      dispatch(Matchinfo(result.data))
      console.log(result.data)
    })
    axios.get("/tournamentinfo").then(result => {
      dispatch(TournamentInfo(result.data))
    })
    axios.get('/venueget').then(res => {
      res = res.data
      dispatch(Venueinfo(res))
    })
  }, [])
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <CountriesComp />
          </Route>
          <Route exact path="/countries">
            <CountriesComp />
          </Route>
          <Route exact path="/venues">
            <Venues />
          </Route>
          <Route exact path="/matches">
            <Fixtures datatosend={matchdata} />
          </Route>
          <Route exact path="/players/:teamname">
            <Players />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route path="/matchdetails/:match_id">
            <MatchDetails />
          </Route>
          <Route path="/playersprofile/:playername">
            <PlayerProfile />
          </Route>
          <Route path="/tournament">
            <TournamentInfoComp />
          </Route>
          <Route path="/tournamentinfo/:tournamentid">
            <TournamentDetails />
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
