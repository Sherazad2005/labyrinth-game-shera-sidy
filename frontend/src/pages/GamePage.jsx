import { useState, useEffect } from "react";
import { fetchLevel } from "../api/labyrinthApi";

function GamePage() {
  
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLevel() {
      try {
        const data = await fetchLevel(1); 
        setLevel(data);                  
      } catch (error) {
        console.error("Erreur lors du chargement du niveau :", error);
      } finally {
        setLoading(false);               
      }
    }
    loadLevel();
  }, []); 

  
  if (loading) return <div>Chargement...</div>;
  if (!level) return <div>Impossible de charger le niveau</div>;

  return (
    <div>
      <h1>{level.name}</h1>
      {level.grid.map((row, y) => (
        <div key={y}>
          {row.map((tile, x) => (
            <span key={`${x}-${y}`}>{tile} </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GamePage;


