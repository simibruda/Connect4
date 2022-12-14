import React, { useState, useEffect } from "react";
import BlockTable from "./BlockTable";
import WinnerPage from "./WinnerPage";
const emptyarrOfNine = new Array(7).fill(0);

function Table({ setWinner}) {
  const [arrTable, setArrTable] = useState(new Array(6).fill(emptyarrOfNine));

 
  const [winnerBlock, setWinnerBlock] = useState(0);
  useEffect(() => {
    setWinner(winnerBlock)
  });
 
  console.log(winnerBlock)
  return (
    <>
      <div className="container">
        <BlockTable
          arrTable={arrTable}
          setWinner={setWinnerBlock}
         
        />
      </div>
    </>
  );
}

export default Table;
