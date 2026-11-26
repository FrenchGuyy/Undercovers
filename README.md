# Undercover

Jeu de bluff inspiré d'Undercover, à jouer entre amis dans le navigateur (3 à 20 joueurs).

👉 **Jouer** : https://frenchguyy.github.io/Undercovers/

## Modes de jeu

- **1 téléphone** : on se passe l'écran, chacun découvre son personnage en secret.
- **Jouer en ligne** : un salon avec un code à 4 lettres, chacun sur son téléphone, vote partagé et solution révélée par l'hôte (Firebase).
  Un tchat est disponible dans le salon (bouton 💬 en bas à droite).
  Des émotes (8 petits visages dessinés pour le jeu) s'envoient comme des messages, depuis la barre au-dessus du champ de saisie du tchat. Anti-spam : 3 émotes maximum sur 8 secondes, au-delà elles sont bloquées 20 secondes.
- **Code hors ligne** : chacun sur son téléphone, sans internet, avec un code de partie.

## Installer comme une application

Le jeu s'installe sur le téléphone (icône sur l'écran d'accueil, plein écran) :
- **Android (Chrome)** : bouton « Installer l'application » dans le menu du jeu, ou menu ⋮ puis « Installer l'application ».
- **iPhone (Safari)** : Partager, puis « Sur l'écran d'accueil ».

À chaque ouverture avec internet, la dernière version publiée sur GitHub est récupérée automatiquement. Sans internet, la dernière version déjà téléchargée est utilisée (les modes locaux marchent, pas le mode en ligne).

## Fichiers

- `index.html` : tout le jeu (un seul fichier).
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png` : l'application installable.
- `duos.json` : la liste des personnages. Le jeu la lit au lancement, pour le mode local comme pour le mode en ligne.
- `online.html` : redirige vers `index.html` (ancien lien).

## Modifier les personnages

1. Dans le jeu, appuyer 5 fois vite sur le titre du menu et entrer le code admin.
2. Ajouter, modifier ou supprimer des duos, puis « Télécharger duos.json ».
3. Remplacer `duos.json` dans ce dépôt. Tout le monde (local et en ligne) a la nouvelle liste.

## Licence

Code publié sous licence [MIT](LICENSE). Les noms de personnages et d'œuvres
appartiennent à leurs ayants droit ; ce projet de fan n'est pas affilié aux séries citées.

## Nouveautés (version améliorée)
- **Vote par éliminations** (mode 1 téléphone, réglable) : si le groupe se trompe, le joueur désigné est éliminé et la partie continue jusqu'à 2 joueurs.
- **« Comment jouer ? »** : écran de règles dans le menu.
- **Réglages mémorisés** (nombre de joueurs, mode, type de vote).
- **Code hors ligne partageable** (bouton « Partager le code »).
- **En ligne** : si l'hôte quitte, le salon passe au joueur suivant au lieu de se fermer.
- Accessibilité : messages d'erreur et tchat annoncés aux lecteurs d'écran.
