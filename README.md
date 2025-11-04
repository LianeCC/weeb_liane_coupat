# Weeb - Blog sur le web

Projet de blogging - DataScientest
rapport disponible : https://docs.google.com/document/d/15F239rzl20Posz2en7324xuSiMPeglc9GW45Q0Y6WiM/edit?hl=fr&tab=t.0

## Objectif

- semaine 1.Développement des pages **Home**, **Contact** et **Login** à partir d'une maquette Figma.
- semaine 2.Intégration du backend (liste d’articles + détail).
- semaine 3.
- semaine 4.


## Stack technique

- React
- Tailwind CSS
- React Router DOM
- Framer Motion
- Git

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre : http://localhost:5173

## Connexion au backend

Par défaut, l’URL API utilise le fallback local :
- `http://127.0.0.1:8000`

## Routes disponibles

- / : Home
- /contact : formulaire (envoie sur POST /api/contact/)
- /login : page maquette
- /articles : liste d’articles (6 par page)
- /articles/:slug : détail d’un article