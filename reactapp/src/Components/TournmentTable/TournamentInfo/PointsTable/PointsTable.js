import React,{useEffect,useState} from 'react'
import './PointsTable.css'
import {Table} from 'react-bootstrap'
export default function PointsTable(props) {
    const [display,changedisplay]=useState()
    useEffect(() => {
        let base64String;
        let logo;
        let displayelement=[]
    const imageconverter = (data) => {
            console.log(data)
            base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
            base64String = "data:image/jpeg;base64," + base64String.slice(20);
            logo = base64String.toString('base64');
            return logo
        }
        let points=props.points.sort((a,b)=>b.points*b.netrunrate.$numberDecimal-a.points*a.netrunrate.$numberDecimal)
        console.log(props.points)
        console.log("PPP")
        console.log(points)
        let team
        for(let i=0;i<points.length;i++)
        {
            logo=imageconverter(points[i].teamlogo.data)
            displayelement.push(
                <tr key={points[i]._id}>
                    <td>{i+1}</td>
                    <td style={{textAlign:"left",fontWeight: "600"}}>
                        <span className="teamnamelogo">
                        <img className="team_image" src={logo}/>
                        <span className="team_name">
                            {points[i].teamname}
                        </span>
                        </span>            
                    </td>
                    <td>{points[i].played}</td>
                    <td>{points[i].won}</td>
                    <td>{points[i].lost}</td>
                    <td>{points[i].tied}</td>
                    <td>{points[i].netrunrate.$numberDecimal}</td>
                    <td>{points[i].points}</td>
                </tr>
            )
        }
        changedisplay(displayelement)
    
    }, [])
    return (
        <div className="point_table">
            <Table responsive className="points_main_table" bordereless hover size="sm">
  <thead>
    <tr>
      <th>No.</th>
      <th style={{textAlign:"left"}}>Team</th>
      <th>Played</th>
      <th>Won</th>
      <th>Lost</th>
      <th>Tied</th>
      <th className="on_wide_display">Net RR</th>
      <th className="on_shrink_display">NRR</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
   {
       display
   }
  </tbody>
</Table>
        </div>
    )
}
