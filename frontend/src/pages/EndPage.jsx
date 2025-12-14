import { useState, useEffect } from "react";
import axios from "axios";

function EndPage({ score, playerName, setPage }) {
    const [highScores, setHighScores] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    useEffect(() => {
        async function submitScore() {
            try {
                await axios.post("http://localhost:4000/api/highscores", {
                    playerName,
                    score,
                    levelId: 1
                });
                setHasSubmitted(true);
            } catch (error) {
                console.error("Erreur lors de la soumission du score :", error);
            }
    }
    if(playerName && score !== undefined && !hasSubmitted){
        submitScore();
    }
    }, [playerName, score, hasSubmitted]);

    useEffect(() => {
        async function loadHighScores() {
            try {
                const response = await axios.get("http://localhost:4000/api/highscores?levelId=1&limit=5");
                setHighScores(response.data);
            } catch (error) {
                console.error("Erreur lors du chargement des meilleurs scores :", error);
            }
        }
        loadHighScores();
    }, []);

    const uniqueHighScores = [];
    const seenPlayers = new Set();
    highScores.forEach((h) => {
        if (!seenPlayers.has(h.playerName)) {
            uniqueHighScores.push(h);
            seenPlayers.add(h.playerName);
        }
    });

    return (
        <div className="EndPage">
            <h1>Jeu Terminé !</h1>
             <p>
                Bravo <strong>{playerName}</strong> !
                </p>
            <p>Ton score final est : {score}</p>
            <h2>Meilleurs Scores</h2>
<ul>
  {uniqueHighScores.map((h, index) => (
    <li key={h.id}>
      {index === 0 && "🥇 "}
      {index === 1 && "🥈 "}
      {index === 2 && "🥉 "}
      {h.playerName} : {h.score}
    </li>
  ))}
</ul>

    <button onClick={() => setPage("home")}>Rejouer</button>
            </div>
    );
}
export default EndPage;
