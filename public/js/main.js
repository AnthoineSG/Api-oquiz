const app = {

    url: "http://localhost:8080",

    init() {
        console.log("hello");
        app.makeInDOM();
    },


    makeInDOM() {
        app.fetchLevel(2);
        app.fetchTag(3);
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
    }


};

document.addEventListener("DOMContentLoaded", app.init);
