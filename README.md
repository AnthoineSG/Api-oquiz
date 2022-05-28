# Premiere API solo

#### Creation d'une api en mode *solo*

Start :

```bash
npm i
.env (a cree)
npm run dev
```

---

## Front

- HTML classique
- CSS classique
- JS vanilla

---

## Back

- Server express
  - Require/Export
- Connection a la BDD en DataMapper
- Recuperation des data dans les models
- Envoie des data sur les Route via les Controller

---

## Archi

```bash
.
├── api
│   ├── app
│   │   ├── controller
│   │   │   ├── answerController.js
│   │   │   ├── levelController.js
│   │   │   ├── questionController.js
│   │   │   ├── quizController.js
│   │   │   ├── tagController.js
│   │   │   └── userController.js
│   │   ├── middleware
│   │   │   └── errorMiddelware.js
│   │   ├── model
│   │   │   ├── dbConnexion.js
│   │   │   └── models
│   │   │       ├── answer.js
│   │   │       ├── level.js
│   │   │       ├── question.js
│   │   │       ├── quiz.js
│   │   │       ├── tag.js
│   │   │       └── user.js
│   │   └── route
│   │       ├── index.js
│   │       └── routes
│   │           ├── answer.js
│   │           ├── level.js
│   │           ├── question.js
│   │           ├── quiz.js
│   │           ├── tag.js
│   │           └── user.js
│   ├── data
│   │   ├── import_data.sql
│   │   └── import_tables.sql
│   └── server.js
└── public
    ├── css
    │   ├── reset.css
    │   └── style.css
    ├── index.html
    └── js
        └── main.js
```
