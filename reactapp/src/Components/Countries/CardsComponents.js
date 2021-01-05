import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './CardsComponents.css'
export default function CardsComponents(props) {
    return (
        <div className="countries_parent">
            <Card>
                <div className="image_div">
                    <Card.Img variant="top" src={props.img} className="image_design" />
                </div>
                <Card.Body>
                    <Card.Title> {props.countryname}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
