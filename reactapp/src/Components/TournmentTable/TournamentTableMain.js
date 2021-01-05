import React,{useEffect,useState} from 'react'
import './TournamentTableMain.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap';
import moment from 'moment'
import Card from './TournamentCards/TournamentCard' 
export default function TournamentTableMain() {
    const [tournamentinfo,changetournamentinfo]=useState()
    const [display,changedisplay]=useState()
    const [textsearch,changesearchtext]=useState();
    const [totalresult,changetotalresult]=useState();
    const [tournamentinfobanner,changetournamentinfobanner]=useState();
    const [newTournamentObj,changetournamentobj]=useState([])
    const [searchactive,changeactivesearch]=useState(false)
    const tournamentinfofromstore=useSelector(state=>state.tournamentinfo)
    var debouncing;
    useEffect(() => {
          let  elementstodisplay=[]
          let base64String;
          let tournamentobj={}
          let arraytostoreobj=[]
        for(let i=0;i<tournamentinfofromstore.length;i++)
        {
            base64String = btoa(String.fromCharCode(...new Uint8Array(tournamentinfofromstore[i].img.data)));
            base64String="data:image/jpeg;base64,"+base64String.slice(20);
            base64String=base64String.toString('base64');
            elementstodisplay.push(<Link className="sidebar_link" to={`/tournamentinfo/${tournamentinfofromstore[i]._id}`}><Card tournamentimage={base64String} formats={tournamentinfofromstore[i].totalformats} key={tournamentinfofromstore[i]._id} startdate={moment(tournamentinfofromstore[i].toutnamentstartdate).format('MMM Do')} tournamentid={tournamentinfofromstore[i]._id} enddate={moment(tournamentinfofromstore[i].toutnamentenddate).format('MMM Do')} tournamentname={tournamentinfofromstore[i].tournamentname} details={tournamentinfofromstore[i]}/></Link>)            
        }
        changetotalresult(elementstodisplay.length)
        changedisplay(elementstodisplay)
    }, [tournamentinfofromstore])
    const onChangeSearch=(e,info)=>{
        let elementstodisplay=[]
        let base64String;
        let text=e.target.value;
        console.log("HIIIS")
        if(text.length==0)
        {
            changetournamentobj([])
            changeactivesearch(false)
        }
        let name;
        clearTimeout(debouncing)
        debouncing=setTimeout(()=>{
            for(let i=0;i<tournamentinfofromstore.length;i++)
            {
                name=tournamentinfofromstore[i].tournamentname.toLowerCase();
                if(name.includes(text.toLowerCase())){
                    elementstodisplay.push(<Link className="sidebar_link" to={`/tournamentinfo/${tournamentinfofromstore[i]._id}`}><Card tournamentimage={base64String} formats={tournamentinfofromstore[i].totalformats} key={tournamentinfofromstore[i]._id} startdate={moment(tournamentinfofromstore[i].toutnamentstartdate).format('MMM Do')} tournamentid={tournamentinfofromstore[i]._id} enddate={moment(tournamentinfofromstore[i].toutnamentenddate).format('MMM Do')} tournamentname={tournamentinfofromstore[i].tournamentname} details={tournamentinfofromstore[i]}/></Link>)            
                    console.log(tournamentinfofromstore[i].tournamentname)
                }
               
            }
            changeactivesearch(true)
            changetotalresult(elementstodisplay.length)
            changetournamentobj(elementstodisplay)
        },1000)
    }
    return (
        <div>
            <div className="tournament_search_bar_parent"> 
              <div className="tournament_search_bar">
                <input type="text" className="tournament_input_box" onChange={(e)=>onChangeSearch(e,tournamentinfofromstore)} placeholder="Enter Tournament Name"/>
                <div className="search_logo_div">
                <i className="fas fa-search search_logo"></i>
                </div>  
            </div>
            </div>
            <div className="result_text">
            Result-<span>(&nbsp;{totalresult}&nbsp;)</span>
            </div>
            <div className="tournament_row">
                {searchactive?newTournamentObj:display}
            </div>
        </div>
    )
}
