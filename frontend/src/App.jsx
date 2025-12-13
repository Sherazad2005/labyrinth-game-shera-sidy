import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home"); // minuscule
  const [playerName, setPlayerName] = useState("");

  function StartGame() {
    if (playerName.trim() === "") {
      alert("Entre ton nom !");
      return;
    }
    setPage("game"); // minuscule
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

      {page === "game" && <GamePage playerName={playerName} />}
    </div>
  );
}

function GamePage({ playerName }) {
  const [grid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [score, setScore] = useState(0);

  const TileClick = (rowIndex, colIndex) => {
    console.log("Case Cliquée :", rowIndex, colIndex);
    setScore((prev) => prev + 10); // provisoire
  };

  return (
    <div className="GamePage">
      <h1>Mon jeu de grille</h1>
      <h2>Bienvenue {playerName} !</h2>
      <p>Score : {score}</p>

      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                className="tile"
                onClick={() => TileClick(rowIndex, colIndex)}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

