import React from 'react'
import './PlayerAwards.css'
export default function Bowlerofthematch(props) {
    return (
        <div className="bowler_ofthe_match_parent">
             <span className="category_text">{props.texttodisplay}</span>
             <span className="shortname">{props.shortname}</span>
            <div className="bowlerimageandname"> 
                 <img className="bowler_image" src={props.image}/>
                 <span className="bowler_name">{props.playername}</span>
            </div>

           
        </div>
    )
}
