import { useState } from "react";
import "./App.css";
import GamePage from "./pages/GamePage";

function App() {
  const [page, setPage] = useState("home"); // home | game | end
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState(0);
  const [currentLevelId, setCurrentLevelId] = useState(1);


  function StartGame() {
    if (playerName.trim() === "") {
      alert("Entre ton nom !");
      return;
    }
    setPage("game"); 
  }

  return (
    <div className="app">
      {page === "home" && (
        <div className="home">
          <h1>Mon Super Jeu</h1>
          <p>Bienvenue ! Entre ton pseudo pour commencer.</p>

          <input
            type="text"
            placeholder="Ton pseudo"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />

          <button onClick={StartGame}>Jouer</button>
        </div>
      )}

      {page === "game" && (
  <GamePage
    playerName={playerName}
    score={score}
    setScore={setScore}
    setPage={setPage}
    currentLevelId={currentLevelId}
    setCurrentLevelId={setCurrentLevelId}
  />
)}

    {page === "end" && (
  <EndPage
    score={score}
    playerName={playerName}
    setPage={setPage}
  />
)}

    </div>
  );
}




function EndPage({ score }) {
  return (
    <div className="EndPage">
      <h1>Jeu Terminé !</h1>  
      <p>Ton score final est : {score}</p>
    </div>
  );
}

export default App;

