# Minesweeper

We're going to build a classic: Minesweeper 😀

The game works like this:

- There is a field of 100 tiles with hidden contents. There are mines randomly placed.
- When you hit a mine, the game ends
- When you click a tile and there is no mine underneath, it is cleared.
- Any adjecent tiles that do not have mines around will also be cleared.
- When all tiles are cleared, you've won the game.

You can try the game here:
https://minesweeper.online/start/1


# Todo

You can use the existing code but feel free to rewrite anything.

1. In the top right corner, fork this repo.
1. Handle a click on a mine (game ends)
1. Handle a click on a tile without a mine: set `showContent` to `true` of the current tile
1. Then also reveal any *adjecent* tiles that have no mines around.
1. Then also reveal any *adjecent* tiles that have some 1 or more mines around.
1. Done? Help a fellow colleague with some tips!
1. Continue: In `generateGame`, replace that static grid. Dynamically generate it with random mine placement
1. Bonus: Handle a right click (show a flag)
1. Bonus: Find a fun challange to share on codewars.com