import React, { useState, useEffect } from 'react'
import './FixtureMain.css'
import { useSelector } from 'react-redux';
import moment from 'moment';
import AOS from 'aos'
import { Link } from 'react-router-dom'
import DataNotAvailable from './ResultNotAvailbleComp'
import MatchSearch from './DisplayElement'
export default function FixtureMain(props) {
    let matches = useSelector(state => state.matchfixturesinfo)
    const [activemonth, changeactivemonth] = useState(8)
    const [showingmatcheselements, changecurrentmatch] = useState()
    const [matchespermonth, changematchespermonth] = useState([])
    useEffect(() => {
        console.log("From Props")
        console.log(props.datatosend)
        AOS.init({ once: false })
        changeresultsection("Nov 2020")
    }, [matches])
    const [months, changemonth] = useState(["Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sept 2020", "Oct 2020", "Nov 2020", "Dec 2020"])
    let changeresultsection = (monthname) => {
        let dateconverrted;
        let tempstorage = {};
        let sortedelements = []
        let temp = []
        let tempdisplayelement = []
        if (matchespermonth.length == 0 || matchespermonth.length != matches.length) {

            for (let i = 0; i < matches.length; i++) {
                dateconverrted = moment(matches[i].matchDate, "YYYYMMDDhh:mm:ss")
                console.log("Current Date" + dateconverrted.format("DD MMM YYYY"))
                if (tempstorage.hasOwnProperty(dateconverrted.format("MMM YYYY"))) {
                    tempstorage[dateconverrted.format("MMM YYYY")].push(matches[i])
                }
                else {
                    tempstorage[dateconverrted.format("MMM YYYY")] = [matches[i]]
                }
            }
            changematchespermonth(tempstorage)
            console.log(tempstorage)
        }
        let copyoftemp = Object.assign(tempstorage)
        for (let property in copyoftemp) {
            console.log("copyoftemp")
            console.log(property)
            copyoftemp[property] = copyoftemp[property].sort((a, b) => new moment(b.matchDate, "YYYYMMDDhh:mm:ss") - new moment(a.matchDate, "YYYYMMDDhh:mm:ss"))
        }
        if (tempstorage.hasOwnProperty(monthname)) {
            for (let i = 0; i < tempstorage[monthname].length; i++) {
                dateconverrted = moment(tempstorage[monthname][i].matchDate, "YYYYMMDDhh:mm:ss")
                tempdisplayelement.push(<Link style={{ textDecoration: 'none', color: 'black' }} to={tempstorage[monthname][i].hasOwnProperty("team1totalruns") && tempstorage[monthname][i].hasOwnProperty("team2totalruns") ? `/matchdetails/${tempstorage[monthname][i]._id}` : void (0)}><MatchSearch datetodisplay={dateconverrted.format("DD MMM YYYY")} elementtodisplay={tempstorage[monthname][i]} /></Link>)
            }
            changecurrentmatch(<div data-aos="fade-right">{tempdisplayelement}</div>)
        }
        else {
            changecurrentmatch(<DataNotAvailable />)
        }
    }

    let monthsdisplay = []
    for (let i = 0; i < months.length; i++) {
        monthsdisplay.push(<div style={{ border: `${i == months.length - 1 ? "none" : false}` }} className={`month_cell slide  ${activemonth == i ? "active" : ""}`} onClick={() => { changeactivemonth(i); changeresultsection(months[i]) }}><span className="months_text">{months[i].split(" ")[0]}</span><span className="year_text">{months[i].split(" ")[1]}</span></div>)
    }
    return (
        <div>
            <div className="parent_monthyear_div">
                {monthsdisplay}
            </div>
            <div className="results_section">
                {showingmatcheselements}
            </div>
        </div>
    )
}
