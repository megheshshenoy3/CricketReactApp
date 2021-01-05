import React, { useState, useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import './PlayerProfileMain.css'
import AboutDetails from './PlayerProfileTemplate'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
export default function PlayerProfileMain(props, { match }) {
  let { playername } = useParams();
  const [name, changename] = useState();
  const [type, changetype] = useState();
  const [teamsplayedfor, changeteamsplayedfor] = useState()
  const [dateofbirth, changedateofbirth] = useState()
  const [birthplace, changebirthplace] = useState()
  const [nationality, changenationality] = useState()
  const [batsmantype, changebatsmantype] = useState()
  const [bowlertype, changebowlertype] = useState()
  const [about, changeabout] = useState()
  const [BowlingODIRank, changeBowlingODIRank] = useState()
  const [BattingODIRank, changeBattingODIRank] = useState()
  const [BowlingT20Rank, changeBowlingT20Rank] = useState()
  const [BattingT20Rank, changeBattingT20Rank] = useState()
  const [BattingTestRank, changeBattingTestRank] = useState()
  const [BowlingTestRank, changeBowlingTestRank] = useState()
  let base64String;
  let temp;
  let playerdata;
  let cardphase1;
  const [image, changeimage] = useState()
  const [currentplayerinfo, changecurrentplayerinfo] = useState()
  var playerinfo = useSelector(state => state.playerinfo)
  useEffect(() => {
    console.log(typeof playername)
    for (let i = 0; i < playerinfo.length; i++) {
      console.log(playerinfo[i].name)
      if (playerinfo[i].name == playername) {
        changename(playerinfo[i].name)
        changenationality(playerinfo[i].nationality)
        changetype(playerinfo[i].type)
        changeteamsplayedfor(playerinfo[i].teamsPlayedfor.join(","))
        changedateofbirth(playerinfo[i].born)
        changebirthplace(playerinfo[i].placeofbirth)
        changebatsmantype(playerinfo[i].battingstyle)
        changebowlertype(playerinfo[i].bowlingstyle)
        changeabout(playerinfo[i].about)
        changeBowlingODIRank(playerinfo[i].BowlingRankingODI)
        changeBattingODIRank(playerinfo[i].BattingRankingODI)
        changeBowlingT20Rank(playerinfo[i].BowlingRankingT20)
        changeBattingT20Rank(playerinfo[i].BattingRankingT20)
        changeBattingTestRank(playerinfo[i].BattingRankingTest)
        changeBowlingTestRank(playerinfo[i].BowlingRankingTest)
        console.log("ODI", BowlingODIRank)
        base64String = btoa(String.fromCharCode(...new Uint8Array(playerinfo[i].img.data)));
        temp = "data:image/jpeg;base64," + base64String.slice(20);
        temp = temp.toString('base64');
        playerdata = JSON.stringify(playerinfo[i])
        changeimage(temp)
        changecurrentplayerinfo(playerinfo[i])
        break;
      }
    }
    console.log("--")
    if (playerdata) {
      console.log("Meghesh", playerdata)
      console.log(playerdata.name)
    }
    console.log("THisis")
    console.log(name)
  }, [playername, name, playerinfo])

  cardphase1 = <Col sm={6}>
    <div className="image_name_div">
      <img src={image} className="player_image_design" />
      <p className="name_para">{name}
        <p className="typepara">{type == "Batsman" ? batsmantype + " " + type : type == "Bowler" ? bowlertype + " " + type : type}</p>
      </p>

    </div>
  </Col>
  return (
    <div className="parent_profile_div" >
      <Row>
        {
          cardphase1
        }
        <Col>
          <div>
            <Table responsive borderless >
              <thead>
                <tr>
                  <th className="ICC_text border_right_design">ICC Ranking</th>
                  <th className=" header_text border_right_design">ODI</th>
                  <th className=" header_text border_right_design">Test</th>
                  <th className=" header_text">T20</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border_right_design common_text ">Batting</td>
                  <td className="border_right_design rank_text">{BattingODIRank}{BattingODIRank == 1 ? <sup>st</sup> : BattingODIRank == 2 ? <sup>nd</sup> : BattingODIRank == 3 ? <sup>rd</sup> : BattingODIRank != "-" ? <sup>th</sup> : false}</td>
                  <td className="border_right_design rank_text">{BattingTestRank}{BattingTestRank == 1 ? <sup>st</sup> : BattingTestRank == 2 ? <sup>nd</sup> : BattingTestRank == 3 ? <sup>rd</sup> : BattingTestRank != "-" ? <sup>th</sup> : false}</td>
                  <td className="rank_text">{BattingT20Rank}{BattingT20Rank == 1 ? <sup>st</sup> : BattingT20Rank == 2 ? <sup>nd</sup> : BattingT20Rank == 3 ? <sup>rd</sup> : BattingT20Rank != "-" ? <sup>th</sup> : false}</td>

                </tr>
                <tr>
                  <td className="border_right_design common_text ">Bowling</td>
                  <td className="border_right_design common_text rank_text">{BowlingODIRank}{BowlingODIRank == 1 ? <sup>st</sup> : BowlingODIRank == 2 ? <sup>nd</sup> : BowlingODIRank == 3 ? <sup>rd</sup> : BowlingODIRank != "-" ? <sup>th</sup> : false}</td>
                  <td className="border_right_design rank_text">{BowlingTestRank}{BowlingTestRank == 1 ? <sup>st</sup> : BowlingTestRank == 2 ? <sup>nd</sup> : BowlingTestRank == 3 ? <sup>rd</sup> : BowlingTestRank != "-" ? <sup>th</sup> : false}</td>
                  <td className="rank_text">{BowlingT20Rank}{BowlingT20Rank == 1 ? <sup>st</sup> : BowlingT20Rank == 2 ? <sup>nd</sup> : BowlingT20Rank == 3 ? <sup>rd</sup> : BowlingT20Rank != "-" ? <sup>th</sup> : false}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <div>
        <AboutDetails birthdate={dateofbirth} birthplace={birthplace} battingstyle={batsmantype} bowlingstyle={bowlertype} nationality={nationality} teamplayedfor={teamsplayedfor} bio={about} />
      </div>
    </div>
  )
}
