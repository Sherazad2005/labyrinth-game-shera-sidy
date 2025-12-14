import { useState, useEffect } from "react";
import axios from "axios";

function EndPage({ score, playerName, setPage }) {
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        async function loadingHighScores() {
            try {
                const response = await axios.get("http://localhost:4000/api/highscores");
                setHighScores(data);
            } catch (error) {
                console.error("Erreur lors du chargement des meilleurs scores :", error);
            }
        }
        loadingHighScores();
    }, []);

    useEffect(() => {
        async function submitScore() {
            try {
                await axios.post("http://localhost:4000/api/highscores", {
                    playerName,
                    score,
                    levelId: 1
                });
            } catch (error) {
                console.error("Erreur lors de la soumission du score :", error);
            }
        }
        if (playerName && score !== undefined){
            submitScore();
        }
    }, [playerName, score]);

    return (
        <div className="EndPage">
            <h1>Jeu Terminé !</h1>
             <p>
                Bravo <strong>{playerName}</strong> !
                </p>
            <p>Ton score final est : {score}</p>
            <h2>Meilleurs Scores</h2>
            <ul>
      {highScores.map((h) => (
        <li key={h.id}>
          {h.playerName} : {h.score}
        </li>
      ))}
    </ul>
    <button onClick={() => setPage("home")}>Rejouer</button>
            </div>
    );
}
export default EndPage;
