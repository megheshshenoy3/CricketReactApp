import React, { useState, useEffect } from 'react'
import './PlayerMain.css'
import PlayerCard from './PlayerComponent'
import { Card, Row, Col } from 'react-bootstrap';
import { Playerinfo } from '../../Actions'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
export default function PlayerMain(props) {
    let { teamname } = useParams()
    let playerdata = useSelector(state => state.playerinfo)
    const [dummy, changedummy] = useState(false)
    const [customsearch, changecustom] = useState(false)
    const [batsman, changebatsman] = useState(playerdata)
    const [bowler, changebowlers] = useState()
    const [allrounder, changeallrounders] = useState()
    const [wicketkeeper, changewicketkeeper] = useState()
    const dispatch = useDispatch();
    let debouncing;
    let base64String;
    var batsmanglobal = []
    var bowlersglobal = []
    var allroundersglobal = []
    var wicketkeepersglobal = []
    let batsmancount = 0;
    let bowlercount = 0
    let allroundercount = 0;
    let wicketkeepercount = 0;

    const [batsmancountonsearch, changebatsmancountonsearch] = useState();
    const [bowlercountonsearch, changebowlercountonsearch] = useState();
    const [allroundercountonsearch, changeallroundercountonsearch] = useState();
    const [wicketkeepercountonsearch, changewicketkeepercountonsearch] = useState();

    let temp;
    useEffect(() => {
        console.log("TEAM")
        console.log(teamname)
        if (playerdata) {
            axios.get('/playerinfo').then(result => {
                dispatch(Playerinfo(result.data))
                console.log(result.data)
            })
        }
        datatdisplay()
    }, [])
    const datatdisplay = () => {
        console.log("---")
        console.log(props.data)
        console.log("kk" + batsman)
        console.log(batsman)
        console.log("kk" + batsman)
    }
    for (let i = 0; i < playerdata.length; i++) {
        base64String = btoa(String.fromCharCode(...new Uint8Array(playerdata[i].img.data)));
        temp = "data:image/jpeg;base64," + base64String.slice(20);
        temp = temp.toString('base64');
        if (teamname === "all") {
            if (playerdata[i].type == "Batsman") {
                batsmancount = batsmancount + 1
                batsmanglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" to={`/playersprofile/${playerdata[i].name}`} key={playerdata[i]._id} style={{ outline: "none" }}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "Bowler") {
                bowlercount = bowlercount + 1
                bowlersglobal.push(<Col key={playerdata[i]._id} key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "All Rounder") {
                allroundercount = allroundercount + 1
                allroundersglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" key={playerdata[i]._id} to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "Wicket Keeper") {
                wicketkeepercount = wicketkeepercount + 1
                wicketkeepersglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" key={playerdata[i]._id} to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} key={playerdata[i]._id} name={playerdata[i].name} /></Link></Col>)
            }
        }
        else {
            if (playerdata[i].type == "Batsman" && playerdata[i].nationality == teamname) {
                batsmancount = batsmancount + 1
                batsmanglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" to={`/playersprofile/${playerdata[i].name}`} key={playerdata[i]._id} style={{ outline: "none" }}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "Bowler" && playerdata[i].nationality == teamname) {
                bowlercount = bowlercount + 1
                bowlersglobal.push(<Col key={playerdata[i]._id} key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "All Rounder" && playerdata[i].nationality == teamname) {
                allroundercount = allroundercount + 1
                allroundersglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" key={playerdata[i]._id} to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
            }
            if (playerdata[i].type == "Wicket Keeper" && playerdata[i].nationality == teamname) {
                wicketkeepercount = wicketkeepercount + 1
                wicketkeepersglobal.push(<Col key={playerdata[i]._id} sm={4}><Link className="remove_outline" key={playerdata[i]._id} to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} key={playerdata[i]._id} name={playerdata[i].name} /></Link></Col>)
            }
        }

    }
    const gettingcharacters = (e) => {
        e.target.value ? changecustom(true) : changecustom(false)
        let batsmancount = 0;
        let bowlercount = 0;
        let allroundercount = 0;
        let wicketkeepercount = 0;
        let batsmanlocalcopy = []
        let bowlerlocalcopy = []
        let allrounderlocalcopy = []
        let wicketkeeperlocalcopy = []
        for (let i = 0; i < playerdata.length; i++) {
            base64String = btoa(String.fromCharCode(...new Uint8Array(playerdata[i].img.data)));
            temp = "data:image/jpeg;base64," + base64String.slice(20);
            temp = temp.toString('base64');
            if (teamname === "all") {
                if (playerdata[i].type == "Batsman") {

                    if (playerdata[i].name.includes(e.target.value)) {
                        batsmancount = batsmancount + 1
                        batsmanlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }
                if (playerdata[i].type == "Bowler") {
                    if (playerdata[i].name.includes(e.target.value)) {
                        bowlercount = bowlercount + 1
                        bowlerlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }
                if (playerdata[i].type == "All Rounder") {
                    if (playerdata[i].name.includes(e.target.value)) {
                        allroundercount = allroundercount + 1
                        allrounderlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} key={playerdata[i]._id} name={playerdata[i].name} /></Link></Col>)

                    }
                }
                if (playerdata[i].type == "Wicket Keeper") {
                    if (playerdata[i].name.includes(e.target.value)) {
                        wicketkeepercount = wicketkeepercount + 1
                        wicketkeeperlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }

            }
            else {
                if (playerdata[i].type == "Batsman" && playerdata[i].nationality == teamname) {

                    if (playerdata[i].name.includes(e.target.value)) {
                        batsmancount = batsmancount + 1
                        batsmanlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }
                if (playerdata[i].type == "Bowler" && playerdata[i].nationality == teamname) {
                    if (playerdata[i].name.includes(e.target.value)) {
                        bowlercount = bowlercount + 1
                        bowlerlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }
                if (playerdata[i].type == "All Rounder" && playerdata[i].nationality == teamname) {
                    if (playerdata[i].name.includes(e.target.value)) {
                        allroundercount = allroundercount + 1
                        allrounderlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard img={temp} key={playerdata[i]._id} name={playerdata[i].name} /></Link></Col>)

                    }
                }
                if (playerdata[i].type == "Wicket Keeper" && playerdata[i].nationality == teamname) {
                    if (playerdata[i].name.includes(e.target.value)) {
                        wicketkeepercount = wicketkeepercount + 1
                        wicketkeeperlocalcopy.push(<Col key={playerdata[i]._id} sm={4}><Link key={playerdata[i]._id} className="remove_outline" to={`/playersprofile/${playerdata[i].name}`}><PlayerCard key={playerdata[i]._id} img={temp} name={playerdata[i].name} /></Link></Col>)
                    }
                }
            }
        }
        changebatsman(batsmanlocalcopy)
        changebowlers(bowlerlocalcopy)
        changeallrounders(allrounderlocalcopy)
        changewicketkeeper(wicketkeeperlocalcopy)
        changebatsmancountonsearch(batsmancount)
        changebowlercountonsearch(bowlercount)
        changeallroundercountonsearch(allroundercount)
        changewicketkeepercountonsearch(wicketkeepercount)

    }
    const debouncingfunc=(e)=>{
        clearTimeout(debouncing)
        debouncing=setTimeout(gettingcharacters(e),500)
    }
    return (
        <div className="player_list_parent">
            <div>
                <div className="Player_tournament_search_bar_parent tournament_search_bar_parent">
                    <div className="tournament_search_bar">
                        <input type="text" className="tournament_input_box" onChange={debouncingfunc} placeholder="Enter Player Name" />
                        <div className="search_logo_div">
                            <i className="fas fa-search search_logo"></i>
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>  
            <div>
                <p className="result_style">Batsman-<span className="result_digit">{customsearch ? batsmancountonsearch : batsmancount}</span></p>
                <Row style={{ width: "100%" }}>
                    {customsearch ? batsman : batsmanglobal}
                </Row>
                <p className="result_style">Bowlers-<span className="result_digit">{customsearch ? bowlercountonsearch : bowlercount}</span></p>
                <Row style={{ width: "100%" }}>
                    {customsearch ? bowler : bowlersglobal}
                </Row>
                <p className="result_style">All Rounder-<span className="result_digit">{customsearch ? allroundercountonsearch : allroundercount}</span></p>
                <Row style={{ width: "100%" }}>
                    {customsearch ? allrounder : allroundersglobal}
                </Row>
                <p className="result_style">Wicket Keeper-<span className="result_digit">{customsearch ? wicketkeepercountonsearch : wicketkeepercount}</span></p>
                <Row style={{ width: "100%" }}>
                    {customsearch ? wicketkeeper : wicketkeepersglobal}
                </Row>
            </div>
        </div>
    )
}
