import React,{useState} from 'react'
import BlockTable from './BlockTable'
import './Input.css'
function WinnerPage({winner,player1,player2,setWinner}) {
 const player1AsObject=JSON.parse(player1);
 const player2AsObject=JSON.parse(player2);
  return (
    <div style={{width:'870px'}}>
      
     
      {
        winner===-1
        ?<h1>It is a draw</h1>
        :<h1 style={winner===player1AsObject.id ?{color:'red',fontSize:'50px'}:{color:'yellow',fontSize:'50px'}}>Player {winner===player1AsObject.id 
          ? player1AsObject.name
          : player2AsObject.name
        
        } won!</h1>
      }

      <button onClick={()=>setWinner(0)}>Play again?</button>
      
      
        
        
    </div>
  )
}

export default WinnerPage
