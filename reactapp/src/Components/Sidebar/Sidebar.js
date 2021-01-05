import React,{useState} from 'react'
import './Sidebar.css'
import BlackScreen from './BlackScreen'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function Sidebar() {
    const [activeslide,changeactiveslide]=useState(1)
    const [showslide,changeshow]=useState()
    const [activeindicator,changeindicator]=useState("first_option")
    const countryinfo = useSelector(state =>state.sidebar)
    let auscolor={background:'#bad42f'}
    let indcolor={background:'blue'}
    return (
        <React.Fragment>
             <span onClick={()=>{changeshow(!showslide)}}><i className="fa fa-bars show_hamburger" style={{marginLeft:"3%",fontSize:"37px",marginTop:"6%"}}></i></span>
            <div>
            <div className={`sidebar_design ${showslide?"open":""}`}>
            <div className={`parent_design ${activeindicator}`}></div>
                <ul className="ul_design">
                   <Link className="sidebar_link" to="/countries"> <li onClick={()=>{changeactiveslide(1);changeindicator("first_option")}} style={countryinfo=="Australia"&&activeslide==1?auscolor:indcolor}  className={`${activeslide==1?"active":"unactive"}`}>Countries</li></Link>
                   <Link className="sidebar_link" to="/players/all"> <li onClick={()=>{changeactiveslide(2);changeindicator("second_option")}} className={`${activeslide==2?"active  ":"unactive"}`}>Players</li></Link>
                   <Link className="sidebar_link" to="/matches"><li  onClick={()=>{changeactiveslide(3);changeindicator("third_option")}}  className={`${activeslide==3?"active ":"unactive"}`}>Fixtures&results</li></Link>
                   <Link className="sidebar_link" to="/venues"><li onClick={()=>{changeactiveslide(4);changeindicator("fourth_option")}}   className={`${activeslide==4?"active ":"unactive"}`}>Venues</li></Link> 
                   <Link className="sidebar_link" to="/tournament"><li onClick={()=>{changeactiveslide(5);changeindicator("fifth_option")}} className={`${activeslide==5?"active ":"unactive"}`}>Tournament&nbsp;Table</li></Link>
                </ul>
            </div>
        </div>
       {showslide? <BlackScreen onClick={()=>{changeshow(false)}} />:false} 
        </React.Fragment>
        
    )
}
