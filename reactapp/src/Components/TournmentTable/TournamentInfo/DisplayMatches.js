import React from 'react'
import moment from 'moment'
import './DisplayMatches.css'
export default function DisplayMatches(props) {
    return (
        <div>
            <div className="match_display_parent">
                <div className="match_dateandplace">
                    <div className="date_time">
                        <span className="match_date">{moment(props.matchdate, "YYYYMMDDhh:mm:ss").format("MMM Do")}</span>
                        <span className="match_time">{moment(props.matchdate, "YYYYMMDDhh:mm:ss").format(" h:mm a")}</span>
                    </div>
                    <span className="spacing_inbetween"></span>
                    <div className="match_number_place">
                        <span className="match_number">Match-{props.matchinfo.matchnumber}</span><span className="match_city">{props.matchinfo.city}</span>
                    </div>
                </div>
                <div className="league_section">
                    <div className="inner_div">
                        <span>{props.matchinfo.tournamentname}</span>
                    </div>
                    <div className="matches_between">
                        <div className="team">
                           <div className="team1">
                                 <img className="teamlogo" src={props.team1logo}/>
                                 <div className="team1name">
                                    {props.matchinfo.team1Name}
                                 </div>
                                 <div className="team1shortname">
                                    {props.matchinfo.team1shortName}
                                </div>
                           </div> 
                           <div className="vs_text">
                                VS
                           </div>
                           <div className="team2">
                                
                                 <div className="team2name">
                                    {props.matchinfo.team2Name}
                                 </div>
                                 <div className="team1shortname">
                                    {props.matchinfo.team2shortName}
                                </div>
                                <img className="teamlogo" src={props.team2logo}/>
                           </div> 
                        </div>
                           
                    </div>
                </div>
                <div className="match_status">
                    {props.matchinfo.result == "TBD" ? props.matchinfo.Venue : props.matchinfo.result}
                </div>
                {/* <div className="league_block">
                        <div className="league_name">
                            {props.matchinfo.tournamentname}
                        </div>
                        <div className="parent_div_teams">
                        <div className="league_teams">
                            <div className="team1">
                                   <img className="teamlogo" src={props.team1logo} />
                                <div className="team1Name">
                                    {props.matchinfo.team1Name}
                                </div>
                                <div className="team1shortname">
                                    {props.matchinfo.team1shortName}
                                </div>
                               
                            </div>

                            <div className="vs_text" >
                                VS
                            </div>
                            
                                <div className="team2">
                                    <div className="team2Name">
                                        {props.matchinfo.team2Name}
                                    </div>
                                    <div className="team2shortname">
                                        {props.matchinfo.team2shortName}
                                    </div>
                       
                        
                                    <img className="teamlogo" src={props.team2logo} />
                                </div>
                            </div>
                        </div> */}
                <div>


                </div>

            </div>

        </div>

    )
}
