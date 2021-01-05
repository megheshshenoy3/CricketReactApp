import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import BattingIcon from '../../../images/BatBallIcon/cricket-bat.svg'
import './BattingScoreboard.css'
export default function BattingScoreboard(props) {
    const [tablerow, changerow] = useState()
    let team = [];
    console.log("LOL")
    console.log(props.battingstats)
    for (let i = 0; i < props.battingstats.length; i++) {
        team.push(<tr>
            <td className="player_name"><div className="text_alignment"><span>{props.battingstats[i].playername}</span><span className="playerstatus">{props.battingstats[i].outby != "null" && props.battingstats[i].outby != "none" ? props.battingstats[i].outby : " "}</span></div></td>
            <td>{props.battingstats[i].runs != "null" && props.battingstats[i].runs != "none" ? props.battingstats[i].runs : " "}</td>
            <td>{props.battingstats[i].fours != "null" && props.battingstats[i].fours != "none" ? props.battingstats[i].fours : " "}</td>
            <td>{props.battingstats[i].sixes != "null" && props.battingstats[i].sixes != "none" ? props.battingstats[i].sixes : " "}</td>
            <td>{props.battingstats[i].strikerate != "null" && props.battingstats[i].strikerate != "none" ? props.battingstats[i].strikerate : " "}</td>
        </tr>)
    }
    return (
        <div key={props.key} className="BattingScoreboard">
            <Table striped borderless hover size="sm">
                <thead>
                    <tr>
                        <th className="player_details" style={{ textAlign: "left" }} >
                            <span className="batting_text">
                                <img className="batting_flagicon" src={props.flag} />
                                <span className="batting_align">
                                    Batting<img className="baticon" src={BattingIcon} />
                                </span>
                            </span>
                        </th>
                        <th>R</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>S/R</th>


                    </tr>
                </thead>
                <tbody>
                    {team}
                </tbody>
            </Table>
        </div>
    )
}
