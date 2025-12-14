import { useState } from "react";
import "./App.css";
import GamePage from "./pages/GamePage";

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
export default App;

