import Tile from "./Tile";
import "./Grid.css";

const Grid = ({ grid, onTileClick, playerPos }) => {
  if (!grid || grid.length === 0) return null;

  const cols = grid[0].length;

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isPlayerHere =
            playerPos &&
            playerPos.row === rowIndex &&
            playerPos.col === colIndex;

          return (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              value={isPlayerHere ? "P" : cell}
              onClick={() => onTileClick(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
};

export default Grid;
