import React from 'react'
import './VenueCards.css'
export default function VenueCards(props) {
    return (
        <div className="venue_cards_div">
            <img className="venue_image_design" src={props.wallpaper}/>
            <span className="text_overlap">{props.stadiumname}</span>
        </div>
    )
}
