import { useState, useEffect } from "react";
import { fetchLevel } from "../api/labyrinthApi";
import Grid from "../components/Grid"
import StatusBar from "../components/StatusBar";
import Inventory from "../components/Inventory";
import Modal from "../components/Modal"

function GamePage({ playerName, score, setScore, setPage }) {
  
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  const [inventory, setInvetory] = useState([]); //picked up items

  const [isModalOpen, setIsModalOpen] = useState(false); //end of the game popup

  const [modalMessage, setModalmessage] = useState(""); //text inside of the popup above

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

  const handleTileClick = (y, x) => {
    const tileValue = level.grid[y][x];
    if (tileValue === 1) {
      //treasure tile
      setScore((prev) => prev + 10);
      setModalmessage("You found a treasure");
      setIsModalOpen(true);
    } else if (tileValue === 2) {
      //trap tile
      setScore((prev) => prev - 5);
      setModalmessage("YOU ACTIVATED A TRAP HAHAHAHA");
      setIsModalOpen(true);
    }
    if (tileValue === 3) { // sortie
  setModalmessage("Bravo, niveau terminé !");
  setIsModalOpen(true);
  setTimeout(() => {
    setPage("end");
  }, 1500);
}

    console.log("Clicked case :", x, y, "valeur :", tileValue);
  };

  return (
    <div className="game-page">
      {/* information above*/}
      <StatusBar
      playerName={playerName}
      score={score}
      level={level.id || 1}
      />

      {/* main zone grid and inventory*/}
      <div className="game-layout">
        <Grid grid={level.grid} onTileClick={handleTileClick} />
        </div>
        {/*text popup for success or defeat of the player*/}
        <Modal
          isOpen={isModalOpen}
          title="Information"
          message={modalMessage}
          onClose={() => setIsModalOpen(false)} />
      </div>
  );
}

export default GamePage;


