export interface ITile {
  id: number;
  x: number;
  y: number;
  mine: boolean;
  minesAround?: number; //amount of mines that are surrounding the tile: a number between 0 and 8
  showContent?: boolean;
  flag?: boolean;
}

export interface IField {
  [key: string]: ITile;
}
