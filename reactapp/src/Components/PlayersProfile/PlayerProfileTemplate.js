import React from 'react'
import './PlayerProfileTemplate.css'
import { Row, Col } from 'react-bootstrap'
export default function PlayerProfileTemplate(props) {
    return (
        <div>
            <div className="personal_info_div">
                <div className="child_div"><Row><Col sm={3}><div>Born</div></Col><Col sm={1}><span>:</span></Col><Col sm={6}><div>{props.birthdate}</div></Col></Row></div>
                <div className="child_div div_background"><Row><Col sm={3}><div>Placeofbirth</div></Col><Col sm={1}><span>:</span></Col><Col sm={6}><div>{props.birthplace}</div></Col></Row></div>
                <div className="child_div"><Row><Col sm={3}><div>Batting&nbsp;Style</div></Col><Col sm={1}><span>:</span></Col><Col sm={6}><div>{props.battingstyle}</div></Col></Row></div>
                <div className="child_div div_background"><Row><Col sm={3}><div>Bowling&nbsp;Style</div></Col><Col sm={1}><span>:</span></Col><Col sm={6}><div>{props.bowlingstyle}</div></Col></Row></div>
                <div className="child_div"><Row><Col sm={3}><div>Nationality</div></Col><Col sm={1}><span>:</span></Col><Col sm={6}><div>{props.nationality}</div></Col></Row></div>
                <div className="child_div border_custom div_background"><Row><Col sm={3}><div>Teams&nbsp;Played&nbsp;for</div></Col><Col sm={1}><div>:</div></Col><Col sm={6}><div>{props.teamplayedfor}</div></Col></Row></div>
            </div>
            <div style={{ marginTop: "4%" }}>
                <p className="custom_text_design">Bio:</p>
                <p className="text_bio">{props.bio}</p>
            </div>
        </div>

    )
}
