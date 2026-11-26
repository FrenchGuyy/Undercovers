# Undercover

Jeu de bluff inspiré d'Undercover, à jouer entre amis dans le navigateur (3 à 20 joueurs).

👉 **Jouer** : https://frenchguyy.github.io/Undercovers/

## Modes de jeu

- **1 téléphone** : on se passe l'écran, chacun découvre son personnage en secret.
- **Jouer en ligne** : un salon avec un code à 4 lettres, chacun sur son téléphone, vote partagé et solution révélée par l'hôte (Firebase).
- **Code hors ligne** : chacun sur son téléphone, sans internet, avec un code de partie.

## Fichiers

- `index.html` : tout le jeu (un seul fichier).
- `duos.json` : la liste des personnages. Le jeu la lit au lancement, pour le mode local comme pour le mode en ligne.
- `online.html` : redirige vers `index.html` (ancien lien).

## Modifier les personnages

1. Dans le jeu, appuyer 5 fois vite sur le titre du menu et entrer le code admin.
2. Ajouter, modifier ou supprimer des duos, puis « Télécharger duos.json ».
3. Remplacer `duos.json` dans ce dépôt. Tout le monde (local et en ligne) a la nouvelle liste.

## Licence

Code publié sous licence [MIT](LICENSE). Les noms de personnages et d'œuvres
appartiennent à leurs ayants droit ; ce projet de fan n'est pas affilié aux séries citées.
