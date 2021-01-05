import React from 'react'
import './Flagdisplay.css'
export default function Flagdisplay(props) {
    return (
        <React.Fragment>
            <span className={`header_flag_div ${props.teamnumber}`}>
            <span className="name_score">
                 <span className={`${props.teamnumber=="team1"?"team_name_text":""}`}>&nbsp; &nbsp;{props.team}&nbsp; &nbsp;</span>
                 <span className="score">&nbsp; &nbsp;{props.runs + "/" + props.wickets+"("+props.overs+")"}&nbsp; &nbsp;</span>   
            </span>
           
                <img  className={`image_div ${props.match.winner==props.team?"winner_style":""}`} src={props.teamflag} />
            </span>
            {/* Mobile View */}
            <span className="mobile_view">

            </span>
        </React.Fragment>


    )
}
