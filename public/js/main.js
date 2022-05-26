const app = {

    url: "http://localhost:8080",

    init() {
        console.log("hello");
        app.makeInDOM();
    },

    makeInDOM() {
        app.fetchLevel(2);
        app.fetchTag(3);
        app.fetchQuiz(5);
        app.fetchQuestion(4);
        app.fetchAnswer(2);
        app.fetchUser(1);
    },

    async fetchLevel(id) {
        const response = await fetch(`${app.url}/level/${id}`, { method: "GET" });
        if (response.ok) {
            const level = await response.json();

            const levelInHTML = document.querySelector(".main__conteneur-level-title");
            levelInHTML.textContent = level.name;
        }
        else {
            console.log(response);
        }
    },

    async fetchTag(id) {
        const response = await fetch(`${app.url}/tags/${id}`, { method: "GET" });
        if (response.ok) {
            const tag = await response.json();

            const tagInHTML = document.querySelector(".header__conteneur-name-tag");
            tagInHTML.textContent = tag.name;
        }
        else {
            console.log(response);
        }
    },

    async fetchQuiz(id) {
        const response = await fetch(`${app.url}/quiz/${id}`, { method: "GET" });
        if (response.ok) {
            const quiz = await response.json();

            const quizInHTML = document.querySelector(".header__conteneur-quiz-title");
            quizInHTML.textContent = quiz.title;
        }
        else {
            console.log(response);
        }
    },

    async fetchQuestion(id) {
        const response = await fetch(`${app.url}/question/${id}`, { method: "GET" });
        if (response.ok) {
            const question = await response.json();

            const questionInHTML = document.querySelector(".main__conteneur-question-title");
            questionInHTML.textContent = question.question;
        }
        else {
            console.log(response);
        }
    },

    async fetchAnswer(id) {
        const response = await fetch(`${app.url}/answer/${id}`, { method: "GET" });
        if (response.ok) {
            const answer = await response.json();

            const answerInHTML = document.querySelector(".main__conteneur-response-title");
            answerInHTML.textContent = answer.description;
        }
        else {
            console.log(response);
        }
    },

    async fetchUser(id) {
        const response = await fetch(`${app.url}/user/${id}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();

            const userInHTML = document.querySelector(".header__conteneur-user-name");
            userInHTML.textContent = user.firstname;
        }
        else {
            console.log(response);
        }
    },
};

document.addEventListener("DOMContentLoaded", app.init);
