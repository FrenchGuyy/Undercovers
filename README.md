# 🎭 Le Traître – Anime

Jeu de déduction inspiré d'Undercover, avec des personnages d'anime.
Il se joue à 3 ou 4 sur un seul écran, directement dans le navigateur.

👉 **Jouer** : https://frenchguyy.github.io/Undercovers/

## Principe

Chaque joueur découvre en secret un personnage d'anime :
- Les **Civils** reçoivent tous le même personnage
- 1 **Traître** reçoit un personnage différent

À tour de rôle, chacun décrit son personnage en un mot ou une courte phrase,
sans le nommer. Ensuite, on discute et on vote pour éliminer le suspect.
Les Civils gagnent s'ils démasquent le Traître.

## Fonctionnalités

- 3 ou 4 joueurs sur le même écran, avec révélation secrète entre chaque joueur
- 4 niveaux de difficulté :
  - **Facile** : univers très différents
  - **Moyen** : séries différentes, même genre
  - **Difficile** : même série, personnages différents
  - **Extrême** : même série, personnages très proches
- 80 paires de personnages, des classiques des années 80 aux séries récentes
- Le Traître change à chaque partie, et les séries ne se répètent pas d'une partie à l'autre
- Un seul fichier HTML, sans serveur, compte ni dépendance

## Lancer en local

Télécharge `index.html` et ouvre-le dans ton navigateur.

## Ajouter des personnages

Dans `index.html`, ajoute une paire dans la liste `PAIRS` (ou `FACILE` pour le niveau facile)
et l'œuvre de chaque personnage dans `WORK`. Pour le niveau Extrême,
ajoute la paire sous la forme `"Perso A|Perso B"` dans `EXTREME`.

## Licence

Code publié sous licence [MIT](LICENSE). Les noms de personnages et d'œuvres
appartiennent à leurs ayants droit ; ce projet de fan n'est pas affilié aux séries citées.
