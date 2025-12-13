import { useState, useEffect, use } from "react";
import axios from "axios";

function EndPage({ score, playerName }) {
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

    useffect(() => {
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
        submitScore();
    }, [playerName, score]);

    return (
        <div className="EndPage">
            <h1>Jeu Terminé !</h1>
            <p>Ton score final est : {score}</p>
            <h2>Meilleurs Scores</h2>
            <ul>
                {highScores.map((h)
            (
                    <li key={h.id}>
                        {h.playerName} : {h.score}
                    </li>   
            ))}
            </ul>
            </div>
    );
}
export default EndPage;
