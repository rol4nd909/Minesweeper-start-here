import { IField, ITile } from "./types";
import cloneDeep from "lodash/cloneDeep";

// Configuration
export const columns = 10;
export const totalAmountOfTiles = columns * columns;
export const amountOfMines = 15;

/**
 * The user clicked a tile, updated the field:
 * Show the current tile content
 * If not a mine: reveal all adjecent tiles as well (that have no mines)
 */
export function updateField(
  oldField: IField,
  clickedTileId: number,
  setFlag?: boolean
) {
  const field = cloneDeep(oldField);

  // Update the field here.
  const tile = field[clickedTileId];
  tile.flag = setFlag;

  if (setFlag) {
    return field;
  }

  tile.showContent = true;

  if (!tile.mine && !tile.minesAround) {
    sweep(tile, field);
  }

  return field;
}

const sweep = (tile: ITile, field: IField) => {
  const pointsAround = [...getPointsAround(tile)];

  for (const point of pointsAround) {
    const tile = Object.values(field).find(
      (f) => f.x === point.x && f.y === point.y
    );

    if (tile) {
      const x = tile.showContent;
      tile.showContent = true;

      if (!tile?.minesAround && !x) {
        sweep(tile, field);
      }
    }
  }
};

type Point = {
  x: number;
  y: number;
};

function* getPointsAround(point: Point) {
  for (let x = point.x - 1; x <= point.x + 1; x++) {
    for (let y = point.y - 1; y <= point.y + 1; y++) {
      if (
        (x !== point.x || y !== point.y) &&
        x >= 0 &&
        y >= 0 &&
        x < columns &&
        y < columns
      ) {
        yield { x, y };
      }
    }
  }
}

export const generateMineIndexes = () => {
  const indices = new Set();
  while (indices.size !== amountOfMines) {
    indices.add(Math.floor(Math.random() * totalAmountOfTiles));
  }
  return indices;
};

/**
 * Generate the game, based on columns and amountOfMines
 */
export function generateGame() {
  let newField: IField = {};

  newField = {
    "0": {
      id: 0,
      x: 0,
      y: 0,
      mine: false,
      minesAround: 0,
    },
    "1": {
      id: 1,
      x: 1,
      y: 0,
      mine: false,
      minesAround: 0,
    },
    "2": {
      id: 2,
      x: 2,
      y: 0,
      mine: false,
      minesAround: 0,
    },
    "3": {
      id: 3,
      x: 3,
      y: 0,
      mine: false,
      minesAround: 0,
    },
    "4": {
      id: 4,
      x: 4,
      y: 0,
      mine: false,
      minesAround: 1,
    },
    "5": {
      id: 5,
      x: 5,
      y: 0,
      mine: true,
    },
    "6": {
      id: 6,
      x: 6,
      y: 0,
      mine: false,
      minesAround: 2,
    },
    "7": {
      id: 7,
      x: 7,
      y: 0,
      mine: false,
      minesAround: 2,
    },
    "8": {
      id: 8,
      x: 8,
      y: 0,
      mine: true,
    },
    "9": {
      id: 9,
      x: 9,
      y: 0,
      mine: true,
    },
    "10": {
      id: 10,
      x: 0,
      y: 1,
      mine: false,
      minesAround: 0,
    },
    "11": {
      id: 11,
      x: 1,
      y: 1,
      mine: false,
      minesAround: 0,
    },
    "12": {
      id: 12,
      x: 2,
      y: 1,
      mine: false,
      minesAround: 0,
    },
    "13": {
      id: 13,
      x: 3,
      y: 1,
      mine: false,
      minesAround: 0,
    },
    "14": {
      id: 14,
      x: 4,
      y: 1,
      mine: false,
      minesAround: 1,
    },
    "15": {
      id: 15,
      x: 5,
      y: 1,
      mine: false,
      minesAround: 1,
    },
    "16": {
      id: 16,
      x: 6,
      y: 1,
      mine: false,
      minesAround: 2,
    },
    "17": {
      id: 17,
      x: 7,
      y: 1,
      mine: true,
    },
    "18": {
      id: 18,
      x: 8,
      y: 1,
      mine: false,
      minesAround: 4,
    },
    "19": {
      id: 19,
      x: 9,
      y: 1,
      mine: false,
      minesAround: 3,
    },
    "20": {
      id: 20,
      x: 0,
      y: 2,
      mine: false,
      minesAround: 0,
    },
    "21": {
      id: 21,
      x: 1,
      y: 2,
      mine: false,
      minesAround: 0,
    },
    "22": {
      id: 22,
      x: 2,
      y: 2,
      mine: false,
      minesAround: 0,
    },
    "23": {
      id: 23,
      x: 3,
      y: 2,
      mine: false,
      minesAround: 0,
    },
    "24": {
      id: 24,
      x: 4,
      y: 2,
      mine: false,
      minesAround: 1,
    },
    "25": {
      id: 25,
      x: 5,
      y: 2,
      mine: false,
      minesAround: 1,
    },
    "26": {
      id: 26,
      x: 6,
      y: 2,
      mine: false,
      minesAround: 2,
    },
    "27": {
      id: 27,
      x: 7,
      y: 2,
      mine: false,
      minesAround: 3,
    },
    "28": {
      id: 28,
      x: 8,
      y: 2,
      mine: true,
    },
    "29": {
      id: 29,
      x: 9,
      y: 2,
      mine: false,
      minesAround: 2,
    },
    "30": {
      id: 30,
      x: 0,
      y: 3,
      mine: false,
      minesAround: 0,
    },
    "31": {
      id: 31,
      x: 1,
      y: 3,
      mine: false,
      minesAround: 0,
    },
    "32": {
      id: 32,
      x: 2,
      y: 3,
      mine: false,
      minesAround: 0,
    },
    "33": {
      id: 33,
      x: 3,
      y: 3,
      mine: false,
      minesAround: 0,
    },
    "34": {
      id: 34,
      x: 4,
      y: 3,
      mine: false,
      minesAround: 1,
    },
    "35": {
      id: 35,
      x: 5,
      y: 3,
      mine: true,
    },
    "36": {
      id: 36,
      x: 6,
      y: 3,
      mine: false,
      minesAround: 1,
    },
    "37": {
      id: 37,
      x: 7,
      y: 3,
      mine: false,
      minesAround: 2,
    },
    "38": {
      id: 38,
      x: 8,
      y: 3,
      mine: true,
    },
    "39": {
      id: 39,
      x: 9,
      y: 3,
      mine: false,
      minesAround: 2,
    },
    "40": {
      id: 40,
      x: 0,
      y: 4,
      mine: false,
      minesAround: 0,
    },
    "41": {
      id: 41,
      x: 1,
      y: 4,
      mine: false,
      minesAround: 0,
    },
    "42": {
      id: 42,
      x: 2,
      y: 4,
      mine: false,
      minesAround: 0,
    },
    "43": {
      id: 43,
      x: 3,
      y: 4,
      mine: false,
      minesAround: 0,
    },
    "44": {
      id: 44,
      x: 4,
      y: 4,
      mine: false,
      minesAround: 1,
    },
    "45": {
      id: 45,
      x: 5,
      y: 4,
      mine: false,
      minesAround: 2,
    },
    "46": {
      id: 46,
      x: 6,
      y: 4,
      mine: false,
      minesAround: 2,
    },
    "47": {
      id: 47,
      x: 7,
      y: 4,
      mine: false,
      minesAround: 2,
    },
    "48": {
      id: 48,
      x: 8,
      y: 4,
      mine: false,
      minesAround: 1,
    },
    "49": {
      id: 49,
      x: 9,
      y: 4,
      mine: false,
      minesAround: 1,
    },
    "50": {
      id: 50,
      x: 0,
      y: 5,
      mine: false,
      minesAround: 0,
    },
    "51": {
      id: 51,
      x: 1,
      y: 5,
      mine: false,
      minesAround: 1,
    },
    "52": {
      id: 52,
      x: 2,
      y: 5,
      mine: false,
      minesAround: 1,
    },
    "53": {
      id: 53,
      x: 3,
      y: 5,
      mine: false,
      minesAround: 1,
    },
    "54": {
      id: 54,
      x: 4,
      y: 5,
      mine: false,
      minesAround: 1,
    },
    "55": {
      id: 55,
      x: 5,
      y: 5,
      mine: false,
      minesAround: 2,
    },
    "56": {
      id: 56,
      x: 6,
      y: 5,
      mine: true,
    },
    "57": {
      id: 57,
      x: 7,
      y: 5,
      mine: false,
      minesAround: 1,
    },
    "58": {
      id: 58,
      x: 8,
      y: 5,
      mine: false,
      minesAround: 0,
    },
    "59": {
      id: 59,
      x: 9,
      y: 5,
      mine: false,
      minesAround: 0,
    },
    "60": {
      id: 60,
      x: 0,
      y: 6,
      mine: false,
      minesAround: 1,
    },
    "61": {
      id: 61,
      x: 1,
      y: 6,
      mine: false,
      minesAround: 3,
    },
    "62": {
      id: 62,
      x: 2,
      y: 6,
      mine: true,
    },
    "63": {
      id: 63,
      x: 3,
      y: 6,
      mine: false,
      minesAround: 2,
    },
    "64": {
      id: 64,
      x: 4,
      y: 6,
      mine: false,
      minesAround: 1,
    },
    "65": {
      id: 65,
      x: 5,
      y: 6,
      mine: true,
    },
    "66": {
      id: 66,
      x: 6,
      y: 6,
      mine: false,
      minesAround: 2,
    },
    "67": {
      id: 67,
      x: 7,
      y: 6,
      mine: false,
      minesAround: 1,
    },
    "68": {
      id: 68,
      x: 8,
      y: 6,
      mine: false,
      minesAround: 0,
    },
    "69": {
      id: 69,
      x: 9,
      y: 6,
      mine: false,
      minesAround: 0,
    },
    "70": {
      id: 70,
      x: 0,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "71": {
      id: 71,
      x: 1,
      y: 7,
      mine: true,
    },
    "72": {
      id: 72,
      x: 2,
      y: 7,
      mine: true,
    },
    "73": {
      id: 73,
      x: 3,
      y: 7,
      mine: false,
      minesAround: 2,
    },
    "74": {
      id: 74,
      x: 4,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "75": {
      id: 75,
      x: 5,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "76": {
      id: 76,
      x: 6,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "77": {
      id: 77,
      x: 7,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "78": {
      id: 78,
      x: 8,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "79": {
      id: 79,
      x: 9,
      y: 7,
      mine: false,
      minesAround: 1,
    },
    "80": {
      id: 80,
      x: 0,
      y: 8,
      mine: false,
      minesAround: 2,
    },
    "81": {
      id: 81,
      x: 1,
      y: 8,
      mine: false,
      minesAround: 3,
    },
    "82": {
      id: 82,
      x: 2,
      y: 8,
      mine: false,
      minesAround: 2,
    },
    "83": {
      id: 83,
      x: 3,
      y: 8,
      mine: false,
      minesAround: 1,
    },
    "84": {
      id: 84,
      x: 4,
      y: 8,
      mine: false,
      minesAround: 0,
    },
    "85": {
      id: 85,
      x: 5,
      y: 8,
      mine: false,
      minesAround: 0,
    },
    "86": {
      id: 86,
      x: 6,
      y: 8,
      mine: false,
      minesAround: 1,
    },
    "87": {
      id: 87,
      x: 7,
      y: 8,
      mine: false,
      minesAround: 2,
    },
    "88": {
      id: 88,
      x: 8,
      y: 8,
      mine: true,
    },
    "89": {
      id: 89,
      x: 9,
      y: 8,
      mine: false,
      minesAround: 1,
    },
    "90": {
      id: 90,
      x: 0,
      y: 9,
      mine: true,
    },
    "91": {
      id: 91,
      x: 1,
      y: 9,
      mine: false,
      minesAround: 1,
    },
    "92": {
      id: 92,
      x: 2,
      y: 9,
      mine: false,
      minesAround: 0,
    },
    "93": {
      id: 93,
      x: 3,
      y: 9,
      mine: false,
      minesAround: 0,
    },
    "94": {
      id: 94,
      x: 4,
      y: 9,
      mine: false,
      minesAround: 0,
    },
    "95": {
      id: 95,
      x: 5,
      y: 9,
      mine: false,
      minesAround: 0,
    },
    "96": {
      id: 96,
      x: 6,
      y: 9,
      mine: false,
      minesAround: 1,
    },
    "97": {
      id: 97,
      x: 7,
      y: 9,
      mine: true,
    },
    "98": {
      id: 98,
      x: 8,
      y: 9,
      mine: false,
      minesAround: 2,
    },
    "99": {
      id: 99,
      x: 9,
      y: 9,
      mine: false,
      minesAround: 1,
    },
  };

  return newField;
}