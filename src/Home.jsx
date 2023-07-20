import React, { useState, useEffect} from 'react'
import TeamCard from './TeamCard'
import DisplayTeamPlayers from './TeamContainer'

function Home() {
    const [teamData, setTeamData ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/teams")
        .then((res) => res.json())
        .then(teamsArray => {
        setTeamData(teamsArray);})
    },[])

  return (
    <div>
        <h1>Fantasy Football Checklist</h1>
        <DisplayTeamPlayers teams={teamData}/>
    </div>
  )
}

export default Home;
