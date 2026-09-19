Les photos de chantier utilisent une source unique dans ce dossier :

- `project-01.jpg`
- `project-11.webp`
- `project-42.png`

Le numero identifie le chantier. Une seule extension doit exister pour un meme
numero. Toutes les pages recuperent l'image avec `getProjectImage(numero)` :
remplacer le fichier canonique met donc la photo a jour partout.

Les fichiers `IMG_*`, `hero-*`, `portfolio-*` et `realisation-*` ne doivent pas
etre crees comme copies d'une photo `project-*`.
