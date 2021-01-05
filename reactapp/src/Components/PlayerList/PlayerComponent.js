import React, { useState } from 'react'
import './PlayerComponent.css'
export default function PlayerComponent(props) {
    const [name, changename] = useState(props.name.split(" "))
    return (
        <div>
            <card>
                <div className="parent_container">
                    <img className="image_block" src={props.img} />
                    <div className="parent_para_container">
                        <span className="first_name_design">{props.name.split(" ")[0]}</span><span className="second_name_design">{props.name.split(" ")[1]}</span>
                    </div>
                </div>
            </card>
        </div>
    )
}
