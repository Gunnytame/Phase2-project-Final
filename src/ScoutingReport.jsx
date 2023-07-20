import React, {useState} from "react";

function ScoutingReport({AddTeam}) {
  const [team, setTeam] = useState("")
  const[player, setPlayer] = useState("")
  const[posistion, setPosistion] = useState("")
  console.log(team)
  
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body:JSON.stringify({
        team: team,
        player: player,
        posistion: posistion,
      })
    })
    .then(r => r.json())
    .then(newScout => console.log(newScout))
  }
  return (
    <form onSubmit={handleSubmit}
    className="Scouting-Report" >
      <input placeholder="team" value={team} 
      onChange={(e) =>
       setTeam(e.target.value)}/>
      <input placeholder="player" value={player} 
      onChange={(e) =>
       setPlayer(e.target.value)}/>
      <textarea placeholder="What round you're looking at them, and key points you'd like to refernce later..."value={posistion} 
      onChange={(e) =>
       setPosistion(e.target.value)} rows={10} />
      <input type="submit" value="Add Player" />
    </form>
  );
}

export default ScoutingReport;