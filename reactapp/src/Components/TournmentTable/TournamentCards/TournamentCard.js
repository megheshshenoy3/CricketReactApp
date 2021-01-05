import React,{useEffect} from 'react'
import {Card} from 'react-bootstrap'
import './TournamentCard.css'
export default function TournamentCard(props) {
    let elementdisplay=[]
    console.log(props.formats)
    for(let keys in props.formats)
    { 
        if(props.formats[keys]>0)
        {
            elementdisplay.push(<span key={keys}>{keys}({props.formats[keys]})&nbsp;</span>)
        }
       
    }
    return (
        <div  className="tournament_parent_class">
            <div className="format_dates_parent">
                <div className="tournament_dates">
                    <span>{props.startdate}</span>-<span>{props.enddate}</span>
               </div>
               <div className="total_formats">
                {
                elementdisplay
                }
               </div>
           </div>
            <div className="tournamentname">
            {props.tournamentname}
            </div>
        </div>
    )
}
