import React from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Playe 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
