/**
 * Return all tiles that are around the given x and y coordinates
 * all: including diagonal
 * sides: excluding diagonal
 */
function getTilesAround(
  type: "all" | "sides",
  field: IField,
  currentX: number,
  currentY: number
) {
  const positions =
    type === "all"
      ? [
          [-1, -1], // topleft
          [0, -1], // top
          [1, -1], // topright
          [1, 0], // right
          [1, 1], // bottomright
          [0, 1], // bottom
          [-1, 1], // bottomleft
          [-1, 0], // left
        ]
      : [
          [0, -1], // top
          [1, 0], // right
          [0, 1], // bottom
          [-1, 0], // left
        ];

  // Get tiles that match
  return Object.values(field).filter((tile) => {
    // Filter on match
    return positions.some(
      ([matchX, matchY]) =>
        matchX === tile.x - currentX && matchY === tile.y - currentY
    );
  });
}