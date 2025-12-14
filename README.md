# Labyrinth Game – Sherazad & Sidy

Jeu de labyrinthe en **plusieurs niveaux** dans lequel le joueur se déplace **case par case** à la recherche de la **sortie**.  
Le joueur rencontrera des **murs**, **portes verrouillées**, **clés de couleurs**, **ennemis**, **pièges** et **objets interactifs**.

---

## Objectif du projet

Le but du projet est de :
- Consommer une **API** fournie (JSON)
- Récupérer dynamiquement les éléments du jeu (objets, portes, ennemis, pièges…)
- Les afficher et les gérer via un **frontend en React.js**
- Implémenter une **logique de gameplay complète**

---

## Technologies utilisées

### Frontend
- React
- Vite
- CSS
- Axios

### Backend
- Node.js
- API REST basée sur JSON

---

## Architecture du projet

### Frontend

Le frontend est composé de plusieurs composants React :

- **Grid** : affichage et gestion de la grille du labyrinthe
- **Tile** : représentation d'une case (mur, sol, objet, joueur, etc.)
- **Inventory** : inventaire du joueur
- **Modal** : affichage des messages et événements
- **StatusBar** : affichage du score, du niveau et du nom du joueur

Chaque composant a un rôle précis afin d'assurer une bonne **lisibilité** et une **maintenabilité** du code.

---

### Backend

Le backend :
- Fournit les niveaux via l'API
- Contient les fichiers `package.json`
- Expose les routes dans `server.js`

Les données du jeu sont stockées sous forme de fichiers **JSON**.

---

## Lancer le projet en local

⚠️ Le **backend et le frontend doivent être lancés simultanément**.

---

### 1️⃣ Lancer le backend

Dans un terminal :

```bash
cd backend
npm install
npm install axios
npm start
```

Le serveur backend démarre sur **http://localhost:3000**.

---

### 2️⃣ Lancer le frontend

Dans un autre terminal :

```bash
cd frontend
npm install
npm run dev
```

Le frontend démarre sur **http://localhost:5173**.

---

## Règles du jeu

Le joueur doit atteindre la **sortie** pour terminer le niveau.

- Certaines **portes** nécessitent une **clé de couleur** correspondante pour être franchies.
- Les **ennemis** et **pièges** représentent des obstacles qu'il faut éviter ou surmonter.
- Les **obstacles** (rocher, eau, feu, etc.) peuvent être surmontés grâce aux **objets**.

Le but est d'atteindre la sortie.

---

## Lien du premier repo GitHub

[https://github.com/ydis/Projet_frontend-Sidy_Sherazade](https://github.com/ydis/Projet_frontend-Sidy_Sherazade)

---

## Auteurs

Projet réalisé par **Sherazad** et **Sidy**.
