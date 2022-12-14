import React, { useState, useEffect, useRef } from "react";
import './Input.css'
function Input({ getPlayer1, getPlayer2, setVrification }) {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [input1, setInput1] = useState("");
  const [input2, setInput2]= useState("");
const [ok,setOK]=useState(false)
  function handlechange1(e) {
    setInput1(e.target.value);
  }

  function handlechange2(e) {
    setInput2(e.target.value);
  }
  function click() {
    if (input1 === "") {
      alert("Please write the name of the player 1");
    }
    if (input2 === "") {
      alert("Please write the name of the player 2");
    }
    if (input2 != "" && input1 != "") {
      setPlayer1({
        id: 1,
        name: input1,
      });
      setPlayer2({
        id: 2,
        name: input2,
      });
      setOK(true)
    }
  }
  useEffect(() => {
    getPlayer1(JSON.stringify(player1));
    getPlayer2(JSON.stringify(player2));
    setVrification(ok);
    
  });

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     
    }}>
      <div className="input-container">
        <div className="inputs">
         
      <input placeholder="Player 1" value={input1} onChange={handlechange1} label="Player1" />
      <div style={{
   
    height: "25px",
  }}></div>
      <input placeholder="Player 2" value={input2} onChange={handlechange2} label="player2" />
      <div style={{
   
    height: "25px",
  }}></div>
      <button calssName ='button' onClick={click}> Submit </button>
      </div>
      </div>
    </div>
  );
}

export default Input;
