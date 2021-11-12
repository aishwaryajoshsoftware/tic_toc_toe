import React, { useState } from "react";
import Square from "./Square.js";
import {isBoardFull,Restart,calculateWinner} from "./GameLogic";

const  Game =()=>{
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);
    const nextSymbol = isXNext ? "X" : "O";
    const winner = calculateWinner(squares);
    
    let getNextPlayer =() => {
    if (winner || isBoardFull(squares))
        return null;
      else 
        return "Next player: " + nextSymbol;
    };

    let isGameOver =()=>{
        if (winner)
        return "Winner : " + winner;
      else if (isBoardFull(squares))
        return "Game is draw!";
      else        
        return null;
    };
    let renderSquare =(i)=>{
      return (
        <Square
          value={squares[i]}
          onClick={() => {
            if (squares[i] != null || winner != null) {
              return;
            }
            const nextSquares = squares.slice();
            nextSquares[i] = nextSymbol;
            setSquares(nextSquares);
  
            setIsXNext(!isXNext); // toggle turns
          }}
        />
      );
    };
  
    let renderRestartButton = () => {
      return (
        <Restart
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
          }}
        />
      );
    };  
     
    return (
      <div className="container">
        <div className="game">
          <div className="game-title">{getNextPlayer()}</div>
          <div className="game-board">
            <div className="in-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="in-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="in-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
          <div className="game-info">{isGameOver()}</div>
          <div className="restart-button">{renderRestartButton()}</div>
        </div>
      </div>
    );
  };
  
export default Game;