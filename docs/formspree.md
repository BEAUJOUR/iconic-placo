# Formulaire Contact

Le formulaire de `/contact` envoie directement a Formspree. Aucun serveur Next.js
n'est necessaire : il fonctionne aussi avec l'export statique GitHub Pages.

Adresse actuelle : `https://formspree.io/f/xzedgvjp`. Elle est configuree par defaut
dans `lib/siteConfig.ts` pour les builds locaux et GitHub Pages. La variable
d'environnement permet de la remplacer sans changer le code.

## Configuration locale

Creer `.env.local` a partir de `.env.example` et renseigner l'adresse de votre
formulaire :

```dotenv
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/VOTRE_IDENTIFIANT
```

Redemarrer le serveur de developpement apres toute modification de cette variable.
L'adresse est publique et ne constitue pas une cle secrete.

## GitHub Pages

Dans le depot GitHub, ouvrir Settings > Secrets and variables > Actions > Variables.
Ajouter la variable `NEXT_PUBLIC_FORMSPREE_ENDPOINT` avec la meme adresse.
Relancer le workflow Deploy GitHub Pages pour reconstruire le site.

Dans Formspree, configurer et verifier l'adresse destinataire de l'artisan.
Le formulaire utilise le champ `email` pour l'adresse de reponse.

## Verification

Sans adresse valide, le bouton est desactive et les coordonnees directes restent
accessibles. Avec une adresse configuree, tester une demande depuis le site,
verifier sa presence dans Formspree et sa reception par le destinataire.
La confirmation affichee sur le site signifie que Formspree a accepte la demande.

Documentation : https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax
