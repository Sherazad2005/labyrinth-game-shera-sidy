const Tile = ({ type, isRevealed, isPlayer, onClick }) => {
    let className = "tile";
    let content = "";

    // Color the tile based on its type
    if (!isRevealed) {
        className += " tile-hidden";
     } else {
  if (type === "W") className += " tile-wall";
  else if (type === "S") className += " tile-start";
  else if (type === "E") className += " tile-exit";
  else if (type === "C" || type === "C_EMPTY") className += " tile-path";
  else className += " tile-path";
}





    if (isPlayer) {
        className += " tile-player";
        content = "🧍‍♀️";
    }
    else if (isRevealed) {
        if (type === "C") content = "💰";
        if (type === "C_EMPTY") content = "💰";
        if (type === "T") content = "🧰";
        if (type === "P") content = "💀";
        if (type === "E") content = "🚪";

        if (typeof type === "string") {
            if (type.startsWith("K:")) content = "🔑";
            if (type.startsWith("D:")) content = "🚪";
        }

    }
     return (
    <div className={className} onClick={onClick}>
      {content}
    </div>
  );
};

export default Tile;