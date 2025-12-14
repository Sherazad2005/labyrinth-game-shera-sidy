import Tile from "./Tile";

const Grid = ({ grid, onTileClick, playerPos }) => {
    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => {
                        const isPlayerHere = 
                        playerPos &&
                        playerPos.row === rowIndex &&
                        playerPos.col === colIndex;
                    
                    
                    return (
                      <Tile
                        key={colIndex}
                        value={isPlayerHere ? "P" : cell} // the point is to put P as the player position instead of S W etc...
                        onClick={() => onTileClick(rowIndex, colIndex)}
                        />
                    );
                })}
                </div>
            ))}
        </div>
    );
};

export default Grid;