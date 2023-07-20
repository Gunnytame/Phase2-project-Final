import React from "react";
import DisplayTeamPlayers from "./TeamContainer";
import ScoutingReport from "./ScoutingReport";
import { NavLink } from 'react-router-dom'

function TeamCard({data}) {
  return (
    <div>
      <h3>{data.team_name}</h3>
      <img src={data.logo_small} alt="logo"/>
      <NavLink to ={`/TeamPage/${data.id}`}> 
        TeamPage
      </NavLink>
      
    </div>
  )};


export default TeamCard;