import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function ScoutingReport({}) {
  const {id} = useParams()
  console.log(id)
  const [playerData, setPlayerData ] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then(playerArray => {
      setPlayerData(playerArray);})
  },[])

  const filterPlayer = playerData.filter(player => {
    return player.team === "scoutingreport"
  } )
  console.log(filterPlayer)
  const[team, setTeam] = useState("")
  const[player, setPlayer] = useState("")
  const[posistion, setPosistion] = useState("")

function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body:JSON.stringify({
        team: "scoutingreport",
        player: player,
        posistion: posistion,
      })
    })
    .then(r => r.json())
    .then(newScout => AddReport(newScout))
  }
  return (<>
    <form onSubmit={handleSubmit}
    className="Scouting-Report" >
      <input placeholder="player" value={player} 
      onChange={(e) =>
       setPlayer(e.target.value)}/>
      <textarea placeholder="What round you're looking at them, and key points you'd like to refernce later..."value={posistion} 
      onChange={(e) =>
       setPosistion(e.target.value)} rows={10} />
      <input type="submit" value="Add Player" />
    </form>
    <div>
    {filterPlayer.map(player => {
        return (
        <div>
            {player.player}

            <div>^^^</div>
            <div>{player.posistion}</div>
        </div> )})}
    </div>
    </>
  );
}

export default ScoutingReport;