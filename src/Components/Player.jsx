import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      {" "}
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <>
              <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
              />
              <button onClick={handleEditClick}>Save</button>
            </>
          ) : (
            <>
              {" "}
              <span className="player-name">{playerName}</span>
              <button onClick={handleEditClick}>Edit</button>
            </>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
    </>
  );
};

export default Player;
