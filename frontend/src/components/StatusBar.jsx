const StatusBar = ({ playerName, score, level}) =>{
    return(
        <div className="status-bar">
            <span>Player : {playerName}</span>
            <span>Score : {score}</span>
            <span>Level : {level}</span>
        </div>
    );
};

export default StatusBar;