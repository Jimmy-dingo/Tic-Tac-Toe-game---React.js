import React from 'react';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
          <button className="replay-btn" onClick={() => {
            window.location.reload(false);
          }}>Play again!</button>
      </div>
    );
  }
}

export default Game;