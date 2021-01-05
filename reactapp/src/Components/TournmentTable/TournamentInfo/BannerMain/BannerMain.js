import React,{useEffect} from 'react'
import './BannerMain.css'
import {useSelector} from 'react-redux'
export default function BannerMain(props) {
    return (
        <React.Fragment>
             <div className="banner_header">
                 <img src={props.tournamentlogo}/>
                 <span className="banner_name">{props.tournamentname}</span>
            </div>
        </React.Fragment>
       
    )
}
