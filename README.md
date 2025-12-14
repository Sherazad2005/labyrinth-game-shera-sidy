# labyrinth-game-shera-sidy

Jeu de labyrinthe en plusieurs niveau, le joueur se déplace case par case en rencontrant parfois des obstacle à la recherche d'une sortie.
des clés de couleurs avec des portes correspondantes sont présentes, ainsi que des ennemis et autres objets.

Technologies utilisées :
Front
-React
-Vite
-CSS
Back
API ---> Json

Le but était de récupérer via l'api donné, les éléments du jeu ( objets, portes, ennemis, pièges ) afin de les projeter à l'aide d'un frontend en React.JS.

Les composants sont séparés en plusieurs parties comme suit ; 

FrontEnd :
Gestion des différents composants (Grid = grille, Inventory = inventaire, Modal = modales, statusBar = statut et Tile = cases)

BackEnd :

gestion des package.json et du serveur.js qui contient les données de l'api


Les règles du jeu sont les suivantes :
Avant de lancer le jeu il faut lancer les commandes suivantes dans le dossier backend et frontend en même temps

dans le terminal (cd ./backend)
dans le dossier Backend avec le terminal lancer les commandes :
npm install axios
npm install 
npm start

dans le terminal (cd ./frontend)
dans le dossier frontend :
npm install
npm run dev --> o 

Cliquer sur les cases adjacentes pour se déplacer
les murs bloquent les intéractions et mouvements 
les ennemis bloquent les mouvements mais ceux ci peuvent êtres surmontés avec des armes
les obstacles (rocher, eau, feu etc...) peuvent être surmontés graces aux objets
Le but est d'atteindre la sortie.

lien du premier répo github :
https://github.com/ydis/Projet_frontend-Sidy_Sherazade
