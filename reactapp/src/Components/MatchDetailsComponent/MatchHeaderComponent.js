import React, { useEffect, useState } from 'react'
import './MatchHeaderComponent.css'
import moment from "moment";
import { Row, Col } from 'react-bootstrap'
import BattingStats from './BattingScoreboard/BattingScoreboard';
import BowlingStats from './Bowling Stats/BowlingScoreBoard'
import FlagDisplay from './FlagDisplay/Flagdisplay'
import { useSelector } from 'react-redux';
import PlayerAwards from './PlayerAwards/PlayerAwards'
export default function MatchHeaderComponent(props) {
    const countryflag = useSelector(state => state.countryinfo)
    const playerinfo = useSelector(state => state.playerinfo)
    const [team1flag, changeteam1flag] = useState();
    const [activeoption, changeoption] = useState(1)
    const [team2flag, changeteam2flag] = useState();
    const [manofthematchimg, changemanofthematch] = useState()
    const [bowleroftheMatch, changebowleroftheMatch] = useState()
    const [bestfielder, changebestfielder] = useState()
    let base64String;
    let finalimage;
    useEffect(() => {
        console.log("Ïn header")
        console.log(playerinfo)
        const imageconverter = (imagedata, instancefunc) => {

            base64String = btoa(String.fromCharCode(...new Uint8Array(imagedata)));
            finalimage = "data:image/jpeg;base64," + base64String.slice(20);
            finalimage = finalimage.toString('base64');
            instancefunc(finalimage)
        }
        for (let i = 0; i < countryflag.length; i++) {
            if (countryflag[i].name.toLowerCase() == props.match.team1Name.toLowerCase()) {
                imageconverter(countryflag[i].img.data, changeteam1flag)
            }
            if (countryflag[i].name.toLowerCase() == props.match.team2Name.toLowerCase()) {
                imageconverter(countryflag[i].img.data, changeteam2flag)
            }
        }

        for (let i = 0; i < playerinfo.length; i++) {
            console.log("In HereSS")
            console.log(playerinfo[i].name == props.match.bowleroftheMatch)
            if (playerinfo[i].name.toLowerCase() == props.match.manofthematch.toLowerCase()) {

                imageconverter(playerinfo[i].img.data, changemanofthematch)
            }
            if (playerinfo[i].name.toLowerCase() == props.match.bowleroftheMatch.toLowerCase()) {
                imageconverter(playerinfo[i].img.data, changebowleroftheMatch)
            }
            if (playerinfo[i].name.toLowerCase() == props.match.bestfielder.toLowerCase()) {

                imageconverter(playerinfo[i].img.data, changebestfielder)
            }
        }

    }, [playerinfo, bowleroftheMatch, countryflag, team1flag, team2flag])

    return (
        <React.Fragment>
            <div className="parent_class_div">
                <div className="match_info">
                    <span className="match_dateandtime">
                        {moment(props.match.matchDate, "YYYYMMDDhh:mm:ss").format("MMM Do YYYY, h:mm a'")}
                    </span>
                    <span className="tournament_name">
                        {props.match.tournamentname}
                    </span>
                    <span className="match_numberandplace">
                        Match-{props.match.matchnumber},{props.match.city}
                    </span>
                </div>
                <div className="flag_parent_class">
                    <FlagDisplay teamflag={team1flag} teamnumber="team1" team={props.match.team1Name} runs={props.match.team1totalruns} wickets={props.match.team1wickets} overs={props.match.team1overs} match={props.match} />
                    <div className="match_status_div">{props.match.status}</div>
                    <FlagDisplay teamflag={team2flag} teamnumber="team2" team={props.match.team2Name} runs={props.match.team2totalruns} wickets={props.match.team2wickets} overs={props.match.team2overs} match={props.match} />
                </div>
                <div className="match_result_text">
                    {props.match.result}
                </div>
                <Row className="man_of_thematch_div">
                    <Col sm={4}><PlayerAwards shortname="M.O.M" texttodisplay="man of the match" image={manofthematchimg} playername={props.match.manofthematch} /></Col>
                    <Col sm={4}><PlayerAwards shortname="B.B" texttodisplay="Best Bowler" image={bowleroftheMatch} playername={props.match.bowleroftheMatch} /></Col>
                    <Col sm={4}><PlayerAwards shortname="B.F" texttodisplay="Best Fielder" image={bestfielder} playername={props.match.bestfielder} /></Col>
                </Row>
            </div>
            <div className="parent_slider">
                <span style={{ borderRight: "1px solid #d5d5d6" }} className={`team_options ${activeoption == 1 ? "active" : ""}`} onClick={() => changeoption(1)}>{props.match.team1Name}</span>
                <span className={`team_options ${activeoption == 2 ? "active" : ""}`} onClick={() => changeoption(2)}>{props.match.team2Name}</span>
            </div>
            <div className="table_custom">
                {activeoption == 1 ? <React.Fragment><BattingStats playerinfo={playerinfo} match={props.match} team={props.match.team1Name} battingstats={props.match.team1battingstats} flag={team1flag} />
                    <BowlingStats match={props.match} team={props.match.team2Name} bowlingstats={props.match.team2bowlingstats} flag={team2flag} /></React.Fragment> : activeoption == 2 ?
                        <React.Fragment>
                            <BattingStats playerinfo={playerinfo} key="m" match={props.match} team={props.match.team2Name} battingstats={props.match.team2battingstats} flag={team2flag} />
                            <BowlingStats match={props.match} key="d" team={props.match.team1Name} bowlingstats={props.match.team1bowlingstats} flag={team1flag} />
                        </React.Fragment> : false
                }
            </div>
        </React.Fragment>
    )
}
