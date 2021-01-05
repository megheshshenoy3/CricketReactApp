import React from 'react'
import CardsComp from './CardsComponents'
import './CountriesMain.css'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {Sidebarinfo} from '../../Actions'
import { useSelector,useDispatch} from 'react-redux'
export default function CountriesMain() {
    let flagdata = useSelector(state => state.countryinfo)
    let sidebar =useSelector(state=>state.sidebar)
    const dispatch = useDispatch()
    let temp;
    let Cardele = [];
    let base64String;
    let changesidebarcolor=(flagname)=>{
        if(flagname=="Australia")
        {
            dispatch(Sidebarinfo("Australia"))
        }
        else
        {
            dispatch(Sidebarinfo("India"))
        }
    }
    for (let i = 0; i < flagdata.length;i++)
    {
        base64String = btoa(String.fromCharCode(...new Uint8Array(flagdata[i].img.data)));
        console.log(base64String.slice(20));
        temp = "data:image/jpeg;base64," + base64String.slice(20);
        temp = temp.toString('base64');
        Cardele.push(<Col><Link onClick={()=>{changesidebarcolor(flagdata[i].name)}} className="country_sidebar_link" to={`players/${flagdata[i].name}`}><CardsComp img={temp} countryname={flagdata[i].name} /></Link></Col>)
    }
    return (
        <div className="main_parent">
            <Row style={{ width: "100%" }}>
                {Cardele}
            </Row>
        </div>
    )
}
