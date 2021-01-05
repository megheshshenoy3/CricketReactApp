import React, { useState } from 'react'
import './BowlingScoreBoard.css'
import { Table } from 'react-bootstrap';
import BowIcon from '../../../images/BatBallIcon/cricket.svg'
export default function BowlingScoreBoard(props) {
    let displayelements = []
    let extrastemp = 0;
    for (let i = 0; i < props.bowlingstats.length; i++) {
        extrastemp += props.bowlingstats[i].extras;
        displayelements.push(
            <tr>
                <td className="bowlers_text_alignment" style={{ textAlign: "left" }}>{props.bowlingstats[i].playername}</td>
                <td>{props.bowlingstats[i].overs}</td>
                <td>{props.bowlingstats[i].runs}</td>
                <td>{props.bowlingstats[i].wickets}</td>
                <td>{props.bowlingstats[i].extras}</td>
                <td>{props.bowlingstats[i].erate}</td>
            </tr>
        )
    }
    return (
        <div key={props.keys} className="bowling_stats">
            <div className="extras">
                <span className="extras_text"> Extra's</span><span className="subscript_text">(In this inngings)</span><span className="extras_divider">:-</span><span className="extras_number_figure">{extrastemp}</span>
            </div>
            <div className="total_scoreboard">
                <span className="total_text">Total</span>
                <span className="total_runs">157/5<span className="total_over">(20)</span></span>
                <span className="required_rate_parent"><span className="required_rate_text">RR</span><span className="required_rate">7.85&nbsp;</span>rpo</span>
            </div>

            <Table striped borderless size="sm" hover>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>
                            <span>
                                <span className="bowling_text_image">
                                    <img className="bowling_flagicon" src={props.flag} />
                                </span>
                                <span className="bowling_text">
                                    Bowling
                                <span ><img className="ball_icon" src={BowIcon} /></span>
                                </span>
                            </span>
                        </th>
                        <th>O</th>
                        <th>R</th>
                        <th>W</th>
                        <th>E</th>
                        <th>E/R</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayelements
                    }
                </tbody>
            </Table>
        </div>
    )
}
