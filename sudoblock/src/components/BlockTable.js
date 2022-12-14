import React, { useState, useEffect } from "react";
import "./Table.css";
import piesaRosie from './imaginipiese/rosu.jpg'
import defau from './imaginipiese/default.jpg'
import galben from './imaginipiese/galben.jpg'
function BlockTable({ arrTable,setWinner,setAuxArrTable}) {
  const [arrTablestate, setAarrTablestate] = useState(arrTable);
  const [player, setPlayer] = useState(1);
 
 setWinner(0);
let copy,copyI;
  const redcol = {
    backgroundImage:`url(${defau})`,
    backgroundSize:'50px 50px'
  };
  const blackcol = {
    backgroundImage:`url(${piesaRosie})`,
    backgroundSize:'50px 50px'

  };
  const blue = {
    backgroundImage:`url(${galben})`,
    backgroundSize:'50px 50px'
  };
  
  function handleClick(i, j,player) {
  
    copy =JSON.parse(JSON.stringify(arrTablestate));
     
    copy.forEach((line,indexI)=>{
      
        line.forEach((item,indexJ)=>{
            if(item===0&&indexJ===j){
             
                copyI=indexI;
               
            }
        })
    
      
    })
      copy[copyI][j]=player;
     
  
    setAarrTablestate(copy)
  
  }
  useEffect(()=>{
   // console.log('yamete korasai')
    console.log(arrTablestate)
    
    let ok=0;
    arrTablestate.forEach((line,indexI) => { 
      line.forEach((element, indexJ)=>{
        if(element!=0){
          if(element===arrTablestate[indexI][indexJ+1]&&arrTablestate[indexI][indexJ+1]===arrTablestate[indexI][indexJ+2]&&arrTablestate[indexI][indexJ+2]===arrTablestate[indexI][indexJ+3])
          {
            setWinner(element)
           
            ok--;
          }
          if(indexI+3<6){
            if(element===arrTablestate[indexI+1][indexJ]&&arrTablestate[indexI+1][indexJ]===arrTablestate[indexI+2][indexJ]&&arrTablestate[indexI+2][indexJ]===arrTablestate[indexI+3][indexJ])
            {
             
              setWinner(element)
              
              ok--;
            }
          }
          if(indexI+3<6&&indexJ>2){
            
            if(element===arrTablestate[indexI+1][indexJ-1]&&arrTablestate[indexI+1][indexJ-1]===arrTablestate[indexI+2][indexJ-2]&&arrTablestate[indexI+2][indexJ-2]===arrTablestate[indexI+3][indexJ-3])
            {  
              
              setWinner(element)
              
              ok--;
            }
          }
          if(indexI+3<6){
            
            if(element===arrTablestate[indexI+1][indexJ+1]&&arrTablestate[indexI+1][indexJ+1]===arrTablestate[indexI+2][indexJ+2]&&arrTablestate[indexI+2][indexJ+2]===arrTablestate[indexI+3][indexJ+3])
            {  
              
              setWinner(element)
             
              ok--;
            }
          }
         ok++;
        }
       
      })
    });
    
    if(ok===42){
      setWinner(-1)
    }
  },[player])
  

  function contStyling(smallBlock) {
    if (smallBlock === 0) return redcol;
    if (smallBlock === 1) return blackcol;
    if (smallBlock === 2) return blue;
  }

  return arrTablestate.map((smallBlockI, i) => (
    <div style={{display:'flex'}} key={i}>
      {smallBlockI.map((smallBlockJ, j) => {
        const stylecontainner = contStyling(smallBlockJ);

        return (
          <div
            key={j}
            className=" cont"
            onClick={() => {
              
              handleClick(i, j,player);
              if (player === 1) setPlayer(2);
              else setPlayer(1);
              
            }}
            style={stylecontainner}
          ></div>
        );
      })}
    </div>
  ));
}
export default BlockTable;
