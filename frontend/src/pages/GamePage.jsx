import { useState, useEffect } from "react";
import { fetchLevel } from "../api/labyrinthApi";
import Grid from "../components/Grid"
import StatusBar from "../components/StatusBar";
import Inventory from "../components/Inventory";
import Modal from "../components/Modal"

function GamePage({ playerName, score, setScore, setPage }) {
  
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  const [inventory, setInventory] = useState([]); //picked up items

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

    // tile key : k:color

    if (tileValue.startWith("K:")) {
      const color = tileValue.split(":")[1];
      setInventory((prev) => [...prev,`Key:${color}`]);
      setModalmessage(`You picked up a ${color}`);
      setIsModalOpen(true);
      return;
    }

    // tuile porte : D:color
    if (tileValue.startWith("D:")) {
      const color = tileValue.split(":")[1];
      const hasKey = inventory.includes(`Key:${color}`);

      if (!hasKey) {
        setModalmessage (`The ${color} door is lock go get the key lol`);
        setIsModalOpen(true);
        return;
      }

      setModalmessage(true);
      // we gonna work on movement 
      return;
    }
    
    if (tileValue === "C") {
      //Small bonus
      setScore((prev) => prev + 1);
      setModalmessage("You found a small treasure");
      setIsModalOpen(true);
    } else if (tileValue === "W") {
      //Wall
      setModalmessage("You ran into a wall try again");
      setIsModalOpen(true);
    } else if (tileValue === "T") {
      setScore((prev) => prev + 10);
      setModalmessage("You've found a huge chest !!");
    } else if (tileValue === "P") {
      setScore((prev) => prev - 5);
      setModalmessage("You've ran into a trap hahahaha skill issues much ?")
    }
    if (tileValue === "E") { // sortie
  setModalmessage("Well done you finished the level !");
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
          <Inventory items={inventory}/>
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


