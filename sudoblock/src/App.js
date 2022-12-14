import React,{useState} from "react";
import Game from "./Game";
import Input from "./components/Input";


function App() {
  const [player1,setPlayer1]=useState('')
  const [player2,setPlayer2]=useState('')
  const [verification,setVrification]=useState(false);
console.log(player1,player2)
  return (
    <div >
      <div><h1 style={{fontSize:'150px',display: "flex",color:'#634b30',fontFamily:'impact',
        justifyContent: "center",
        }}>CONNECT 4</h1></div>
      {!verification
      ?<Input getPlayer1={setPlayer1} getPlayer2={setPlayer2} setVrification={setVrification}/>
      :<Game player1={player1} player2={player2}/>
      }
      
    </div>
  );
}

export default App;
