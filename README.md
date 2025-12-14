# Labyrinth Game – Shera & Sidy

Jeu de labyrinthe en plusieurs niveaux où le joueur se déplace case par case en rencontrant parfois des obstacles à la recherche d'une sortie.

Des clés de couleurs avec des portes correspondantes sont présentes, ainsi que des ennemis et autres objets.

## Technologies utilisées

**Front-end**

L'interface utilisateur est développée avec React et Vite, avec CSS pour le styling.

**Back-end**

L'API utilise JSON pour fournir les données du jeu.

## Installation

Cloner le dépôt puis installer les dépendances :

```bash
git clone https://github.com/Sherazad2005/labyrinth-game-shera-sidy.git
cd labyrinth-game-shera-sidy
npm install
```

Lancer le projet en mode développement :

```bash
npm run dev
```

## Architecture du projet

Le but était de récupérer via l'API donnée les éléments du jeu (objets, portes, ennemis, pièges) afin de les afficher et de créer les différentes fonctionnalités associées à ces derniers.

**Frontend**

Gestion des différents composants : Grid pour la grille du jeu, Inventory pour l'inventaire du joueur, Modal pour les modales d'information, StatusBar pour afficher l'état du joueur, et Tile pour représenter chaque case individuelle.

**Backend**

Gestion des package.json et du serveur.js qui contient les données de l'API.

## Règles du jeu

Le joueur doit atteindre la sortie pour terminer le niveau. Certaines portes nécessitent une clé de couleur correspondante pour être franchies. Les ennemis et pièges représentent des obstacles qu'il faut éviter ou surmonter.

## Auteurs

Projet réalisé par Sherazad et Sidy.
