const Tile = ({ value, onClick }) => {
    let className = "tile";
    if (value === "P") className += " tile-player";
    
    
    else if(value === "S") className += " tile-start";

    else if (value === "E") className += " tile-end";

    else if (value === "W") className += " tile-wall";

    else if (value === "C") className += " tile-path";

    else if (value.startsWith("D:")) className += " tile-door";

    else if (value.startsWith("K:")) className += " tile-key";

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Tile;