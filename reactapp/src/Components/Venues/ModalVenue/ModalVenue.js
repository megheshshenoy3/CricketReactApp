import React,{useEffect,useState} from 'react'
import {Modal,Button,Carousel} from 'react-bootstrap'
import'./ModalVenue.css'
export default function ModalVenue(props) {
    const [images,changeimages]=useState()
    const [index,changeindex]=useState()
    const handleSelect = (selectedIndex, e) => {
        changeindex(selectedIndex);
      };
    
    useEffect(() => {
        let imagesstore=[]
        for(let i=0;i<props.data.length;i++)
        {
                imagesstore.push(<Carousel.Item><img className="carousel_image" src={props.data[i]}/></Carousel.Item>)
        }
        changeimages(imagesstore)
        
    }, [])
    return (
        <React.Fragment>
         <Modal size="md"
      centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel controls activeIndex={index} onSelect={handleSelect}>
        {images}
       </Carousel>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>
    )
}
