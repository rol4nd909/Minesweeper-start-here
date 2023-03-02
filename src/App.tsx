import { useState } from "react";
import classes from "./app.module.scss";

import {
  updateField,
  generateGame,
  amountOfMines,
  totalAmountOfTiles,
} from "./field";

import Tile from "./Tile";
import { IField } from "./types";

const App = () => {
  const [field, setField] = useState<IField>(generateGame());

  const updateGame = (clickedTileId: number, setFlag?: boolean) => {
    setField((oldField) => updateField(oldField, clickedTileId, setFlag));
  };

  // User hit a mine
  const fail = Object.values(field).some((i) => i.mine && i.showContent);

  // All tiles cleared
  const success =
    !fail &&
    Object.values(field).filter((i) => i.showContent).length ===
      totalAmountOfTiles - amountOfMines;

  return (
    <div>
      <div className={classes.field}>
        {Object.values(field).map((tile, index) => (
          <Tile
            done={fail || success}
            updateGame={updateGame}
            key={index}
            {...tile}
          />
        ))}
      </div>

      {fail ? "Kaboom ☠️" : ""}
      {success ? "You did it! 🎉" : ""}

      <button
        className={classes.tryAgain}
        onClick={() => setField(generateGame())}
      >
        Reset!
      </button>
    </div>
  );
};

export default App;
