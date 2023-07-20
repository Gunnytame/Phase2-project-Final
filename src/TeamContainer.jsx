import React from "react";
import TeamCard from "./TeamCard";

function DisplayTeamPlayers({ teams }) {
    // console.log(teams)
  return (
    <div className="cards">
        {teams.map(team => {
        return <TeamCard key={team.id} data={team}/> })}
    </div>
  );
}

export default DisplayTeamPlayers;