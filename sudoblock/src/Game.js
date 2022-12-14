import React,{useState} from 'react'
import Table from "./components/Table";
import WinnerPage from "./components/WinnerPage";
function Game({player1,player2}) {
    const [winner,setWinner]=useState(0);
    const player1AsObject=JSON.parse(player1);
 const player2AsObject=JSON.parse(player2);
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
        

        
      }}>
        <div style={{ display: "flex",
        alignItems: "center",
        justifyContent: "center",backgroundColor: 'rgb(179, 96, 19)',
        height: '550px',width:'50%',   borderRadius: '5%'
  }}>
      {(winner===0)
          ? <Table setWinner={setWinner} />
          :<WinnerPage winner={winner}  setWinner={setWinner} player1={player1} player2={player2}/>
        }
        <div style={winner===0 ?{position:'absolute',marginTop:'450px'}:{display:'none'}}>
          <h1 style={{color:'red'}}>Player 1: {player1AsObject.name}</h1>
          <h2 style={{color:'yellow',marginTop:'3px'}}>Player 2: {player2AsObject.name}</h2>
        </div>
        </div>
        
    </div>
  )
}

export default Game
