import { useState } from "react";

const initialGameBoard = [
  [null, null, null],//a
  [null, null, null],//b
  [null, null, null],//c
];

export default function GameBoard() {
const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard) =>{
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
        updatedBoard[rowIndex][colIndex] = 'X'
        return updatedBoard;
    } );
    
    
    //To rowIndex to theloume gia na jeroume poio row exei dialextei poio array stin ousia , to a to b H to c ////// Kai to colIndex to theloume etsi wste na xeroume poio null akribws tha allaxtei, paradigma apo to array a to 2o null na ginei o H x analoga.
    
}
    
  return (
    //TO PRWTO OL EINAI TO CONTAINER
    <ol id="game-board">
      {gameBoard.map((row,rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
                 ))
              }
            </ol>
          </li>
         ))
       }
    </ol>
  );
}
