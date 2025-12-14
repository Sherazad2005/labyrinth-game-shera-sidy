import Tile from "./Tile";

const Grid = ({ grid, onTileClick, playerPos, revealedTiles }) => {
    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => {
                        const isPlayerHere = 
                        playerPos &&
                        playerPos.row === rowIndex &&
                        playerPos.col === colIndex;
                    const isRevealed = revealedTiles.some((t => t.row === rowIndex && t.col === colIndex));
                    
                    return (
                      <Tile
                        key ={colIndex}
                        type={cell}
                        isPlayer={isPlayerHere}
                        isRevealed={isRevealed}
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