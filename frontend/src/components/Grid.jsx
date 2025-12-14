import Tile from "./Tile";

const Grid = ({ grid, onTileClick }) => {
    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => (
                      <Tile
                        key={colIndex}
                        value={cell}
                        onClick={() => onTileClick(rowIndex, colIndex)}/>
                    ))}
                    </div>
            ))}
        </div>
    );
};

export default Grid;