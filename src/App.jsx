import React from "react";
import Player from "./Components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Playe 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
