import React, { useEffect, useState } from 'react'
import './TournamentinfoMain.css';
import { useSelector } from 'react-redux';
import moment from 'moment'
import { useParams } from "react-router";
import Banner from './BannerMain/BannerMain'
import PointsTable from './PointsTable/PointsTable'
import DisplayElement from './DisplayMatches'
import {Link} from 'react-router-dom'
export default function TournamentinfoMain() {
    let { tournamentid } = useParams();
    const [tournamentinfotopoints,changetournamentinfo]=useState()
    const [displaymatches, changedisplaymatches] = useState()
    const [banner,changebannerinfo]=useState()
    const[activeoption,changeoption]=useState(1)
    const matchinfos = useSelector(state => state.matchfixturesinfo)
    const tournamentinfo=useSelector(state=>state.tournamentinfo)
    useEffect(() => {
        let filteredmatchesstore = []
        let base64String;
        let bannerlogo;
        let team1logo;
        let team2logo;
        let logo;
        let bannerinfo;
        const imageconverter = (data) => {
            console.log(data)
            base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
            base64String = "data:image/jpeg;base64," + base64String.slice(20);
            logo = base64String.toString('base64');
            return logo
        }
        let sortedarrayobj = []
        for (let i = 0; i < matchinfos.length; i++) {
            if (matchinfos[i].tournamentid == tournamentid) {
                sortedarrayobj.push(matchinfos[i])
                
            }
        }
        for(let i=0;i<tournamentinfo.length;i++)
        {
            if(tournamentinfo[i]._id==tournamentid)
            {  
                bannerlogo=imageconverter(tournamentinfo[i].img.data)
                bannerinfo=<Banner tournamentlogo={bannerlogo} tournamentname={tournamentinfo[i].tournamentname}/>
                changetournamentinfo(<PointsTable key={tournamentinfo[i]._id} points={tournamentinfo[i].teampoints}/>)
            }
        }
        changebannerinfo(bannerinfo)

        sortedarrayobj = sortedarrayobj.sort((a, b) => new moment(b.matchDate, "YYYYMMDDhh:mm:ss") - new moment(a.matchDate, "YYYYMMDDhh:mm:ss"))
        console.log("MatchesStored")
        for (let i = 0; i < sortedarrayobj.length; i++) {
            team1logo = imageconverter(sortedarrayobj[i].team1logo.data)
            team2logo = imageconverter(sortedarrayobj[i].team2logo.data)
            if(sortedarrayobj[i].result==="TBD")
            {
                filteredmatchesstore.push(<DisplayElement key={sortedarrayobj[i]._id} team1logo={team1logo} team2logo={team2logo} matchdate={sortedarrayobj[i].matchDate} matchinfo={sortedarrayobj[i]} />)
            }
            else{
                filteredmatchesstore.push(<Link className="tournament_sidebar_link" to={`/matchdetails/${sortedarrayobj[i]._id}`}><DisplayElement key={sortedarrayobj[i]._id} team1logo={team1logo} team2logo={team2logo} matchdate={sortedarrayobj[i].matchDate} matchinfo={sortedarrayobj[i]}/></Link>)

            }
            
        }
        changedisplaymatches(filteredmatchesstore)
        console.log(filteredmatchesstore)
    }, [matchinfos,tournamentinfo])
    return (
        <React.Fragment>
            <div className="div_position">
              {
                  banner
               }
               <div className="options">
                   <span className={`tournament_option_slider ${activeoption==1?"active_option_slider_1":activeoption==2?"active_option_slider_2":""}`}></span>
                    <span onClick={()=>changeoption(1)} className={`options_design left_option_radius ${activeoption==1?"font_color":""}`}>Ficture&nbsp;&&nbsp;Results</span>
                    <span onClick={()=>changeoption(2)} className={`options_design right_option_radius ${activeoption==2?"font_color":""}`}>PointsTable</span>
               </div><br/>
                {
                    activeoption==1?displaymatches:tournamentinfotopoints
                }
            </div>
        </React.Fragment>

    )
}
