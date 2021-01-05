import React,{useEffect} from 'react'
import AOS from 'aos'
import './ResultNotAvailableComp.css'
export default function ResultNotAvailbleComp() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3500">
               <div className="error_panting_class">
                <div className="error_logo">
                    <i className="fas fa-times"></i> 
                </div>
                <div className="error_text">
                    <div className="error_red_text">Sorry!</div>
                    <span style={{opacity:"0.4"}}>As of Now Data is Available for the Month of May and Novermber!</span> 
                </div>
              </div> 
            </div>
        </div>
    )
}
