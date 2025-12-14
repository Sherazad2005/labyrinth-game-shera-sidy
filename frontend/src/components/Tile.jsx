const Tile = ({ type, isRevealed, isPlayer, onClick }) => {
    let className = "tile";

    if (!isRevealed) {
        className += " tile-hidden";
    } else {
        if (type === "C") className += " tile-path";
        if (type === "W") className += " tile-wall";
        if (type === "S") className += " tile-start";
        if (type === "E") className += " tile-exit";
    }

    if (isPlayer) {
        className += " tile-player";
    }
    return <div className={className} onClick={onClick}></div>;
}

export default Tile;