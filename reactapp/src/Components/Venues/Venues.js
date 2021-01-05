import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import './Venues.css';
import ModalVenue from './ModalVenue/ModalVenue'
import VenueCards from './VenueCards/VenueCards'
export default function Venues() {
    const [elementdisplay,changelementdisplay]=useState()
    const [dataformodal,changedataformodal]=useState()
    const [venuename,changevenuename]=useState()
    const [modalvisible,changemodalvisibility]=useState(false)
    const venues=useSelector(state=>state.venue)
    let base64String;
    let logo;
    let display=[]
    let wallpaper;
    const imageconverter = (data) => {
        console.log("IN here")
        console.log(data)
        base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
        base64String = "data:image/jpeg;base64," + base64String.slice(20);
        logo = base64String.toString('base64');
        return logo
    }
    const datatoModal=(datafromdiv,name)=>{
        changedataformodal(datafromdiv)
        changemodalvisibility(true)
        let imagestomodal=[]
        for(let i=0;i<datafromdiv.img.length;i++)
        {
            imagestomodal.push(imageconverter(datafromdiv.img[i].data))
        }
        changedataformodal(imagestomodal)
        changevenuename(name)
    }
    const handleClose=()=>{
        changemodalvisibility(false)
    }
    useEffect(() => {
      
        
        console.log("venues");
        console.log(venues)
        for(let i=0;i<venues.length;i++)
        {   wallpaper=venues[i].img
            console.log("Img")
            console.log(wallpaper)
            wallpaper=imageconverter(wallpaper[0].data)
            display.push(<Col sm={4} className="margin_class"><span onClick={()=>{datatoModal(venues[i],venues[i].name)}}><VenueCards stadiumname={venues[i].name} wallpaper={wallpaper}/></span></Col>)
        }
        changelementdisplay(display)
    }, [venues])
    return (
        <div className="venue_parent_class">
            <Row style={{width:"100%"}}>
               {elementdisplay}
            </Row>
            {modalvisible?<ModalVenue show={modalvisible} name={venuename} handleClose={handleClose} data={dataformodal}/>:false}
           
        </div>
    )
}
