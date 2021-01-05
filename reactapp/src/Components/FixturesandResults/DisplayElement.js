import React, { useEffect } from 'react'
import './DisplayElement.css'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
export default function DisplayElement(props) {
    return (
        <div>
            <div className="match_display_parent_div">
                <Row>
                    <Col sm={2}>
                        <div className="match_date_time">
                            <div className="match_date">
                                {props.datetodisplay}
                            </div>
                            <div className="match_time">
                                {
                                    moment(props.elementtodisplay.matchDate, "YYYYMMDDhh:mm:ss").format("LT")
                                }
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="match_number_venue">
                            <div className="match_number">
                                Match&nbsp;{props.elementtodisplay.matchnumber}
                            </div>
                            <div className="venue">
                                {props.elementtodisplay.city}
                            </div>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className="touranament_name">
                            {props.elementtodisplay.tournamentname}
                        </div>
                        <div className="teams">
                            <div className="team1">
                                {props.elementtodisplay.team1Name}
                                <div className=" team1score">
                                    <span className="score_text"> {props.elementtodisplay.hasOwnProperty("team1totalruns") && props.elementtodisplay.hasOwnProperty("team1wickets") ? props.elementtodisplay.team1totalruns + "/" + props.elementtodisplay.team1wickets : false}</span>{props.elementtodisplay.hasOwnProperty("team1overs") ? "(" + props.elementtodisplay.team1overs + ")" : false}
                                </div>
                            </div>
                            <div className="vs_text">
                                vs
                        </div>
                            <div className="team2">
                                {props.elementtodisplay.team2Name}
                                <div className=" team2score">
                                    <span className="score_text">{props.elementtodisplay.hasOwnProperty("team2totalruns") && props.elementtodisplay.hasOwnProperty("team2wickets") ? props.elementtodisplay.team2totalruns + "/" + props.elementtodisplay.team2wickets : false}</span>{props.elementtodisplay.hasOwnProperty("team2overs") ? "(" + props.elementtodisplay.team2overs + ")" : false}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="displaytext_results">
                            {props.elementtodisplay.result!="TBD"?props.elementtodisplay.result:props.elementtodisplay.Venue}
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Mobile View */}
            <div className="parent_mobile_class">
                <div className="mobile_date_time">
                    <div className="match_date">
                        <span className="mobile_text_bold">{props.datetodisplay}</span>{" " + moment(props.elementtodisplay.matchDate, "YYYYMMDDhh:mm:ss").format("LT")}
                    </div>
                    <div className="mobile_space"></div>
                    <div className="mobile_matchnumber">
                        <span className="mobile_text_bold">Match&nbsp;{props.elementtodisplay.matchnumber}</span> {props.elementtodisplay.city}
                    </div>
                </div>
                <div className="mobile_tournament_name">
                    {props.elementtodisplay.tournamentname}
                </div>
                <div className="mobile_teams">
                    <div className="mobile_team1">
                        {props.elementtodisplay.team1Name}
                        <div>
                            <span className="mobile_score_text"> {props.elementtodisplay.hasOwnProperty("team1totalruns") && props.elementtodisplay.hasOwnProperty("team1wickets") ? props.elementtodisplay.team1totalruns + "/" + props.elementtodisplay.team1wickets : false}</span>{props.elementtodisplay.hasOwnProperty("team1overs") ? "(" + props.elementtodisplay.team1overs + ")" : false}
                        </div>
                    </div>
                    <div className="mobile_vs">
                        VS
                    </div>
                    <div className="mobile_team2">
                        {props.elementtodisplay.team2Name}
                        <div>
                            <span className="mobile_score_text"> {props.elementtodisplay.hasOwnProperty("team2totalruns") && props.elementtodisplay.hasOwnProperty("team2wickets") ? props.elementtodisplay.team2totalruns + "/" + props.elementtodisplay.team2wickets : false}</span>{props.elementtodisplay.hasOwnProperty("team2overs") ? "(" + props.elementtodisplay.team2overs + ")" : false}
                        </div>
                    </div>
                </div>
                <div className={`mobile_result ${props.elementtodisplay.hasOwnProperty("team1totalruns") ? "" : "margintopclass"}`}>
                     {props.elementtodisplay.result!="TBD"?props.elementtodisplay.result:props.elementtodisplay.Venue}
                </div>
            </div>
        </div>

    )
}