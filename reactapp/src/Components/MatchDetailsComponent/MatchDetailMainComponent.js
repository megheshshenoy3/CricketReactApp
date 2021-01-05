import React,{useEffect, useState} from 'react'
import { useParams } from "react-router";
import './MatchDetailMainComponent.css';
import MatchHeaderCard from './MatchHeaderComponent'
import {useSelector} from "react-redux"
export default function MatchDetailMainComponent() {
    let matchinfo=useSelector(state=>state.matchfixturesinfo);
    const [requiredmatchdetails,changedetails]=useState();
    const [elementdisplay,changeelementdisplay]=useState()
    let { match_id } = useParams();
    useEffect(() => {
        console.log("Data")
       console.log(match_id)
       console.log(matchinfo)
       let datadisplaytem=[]
       for(let i=0;i<matchinfo.length;i++)
       {
           if(matchinfo[i]._id==match_id)
           {
               console.log("MatchFound")
               changedetails(matchinfo[i])
               datadisplaytem.push(<MatchHeaderCard match={matchinfo[i]}/>)
               changeelementdisplay(datadisplaytem)
             break;
           }
       }
    }, [match_id,requiredmatchdetails,matchinfo])
    return (
        <div className="main_parent_div">
            {elementdisplay}
        </div>
    )
}
