const  isBoardFull = (squares) =>{
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
}

const Restart = ({ onClick })=>{
    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
}

const calculateWinner = (squares)=>{        
    //all the possible combination to find the winner
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
export {isBoardFull,Restart,calculateWinner};


