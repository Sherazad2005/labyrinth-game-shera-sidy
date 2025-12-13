import { useState } from "react";

export default function Homepage ({ onStart}){
    const [pseudo, setPseudo] = useState("");
    const [error, setError] = useState("");

    const handleStart = ()=> {
        const clean = pseudo.trim();
        return;
    }
    if (clean.length < 1){
        setError("Trop court ! Entrez votre pseudo s'il vous plait.");
        return;

    }
    if (clean.length > 20){
        setError("Trop long ! Entrez votre pseudo s'il vous plait.");
        return;
    }
    setError("");
    onStart(clean);
};

const handleKey = (e) => {
    if (e.key == "enter") handleStart();
};

return (
    <main style={styles.container}>
      <h1 style={styles.title}>FlipLabyrinth</h1>
      <p style={styles.lead}>
        Bienvenue ! Explore le labyrinthe, trouve la sortie et marque des points.
      </p>

      <div style={styles.form}>
        <label style={styles.label}>
          Ton pseudo
          <input
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            onKeyDown={handleKey}
            placeholder="ex : Shera2005"
            style={styles.input}
            maxLength={30}
          />
        </label>

        {error && <div style={styles.error}>{error}</div>}

        <button onClick={handleStart} style={styles.button} aria-label="Jouer">
          Jouer
        </button>
      </div>

      <small style={styles.hint}>Astuce : choisis un pseudo court et reconnaissable.</small>
    </main>
    
  );


