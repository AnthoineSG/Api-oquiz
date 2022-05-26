const app = {

    url: "http://localhost:8080",

    init() {
        console.log("hello");
        app.makeInDOM();
    },


    makeInDOM() {
        app.fetchLevel(2);
    },


    async fetchLevel(id) {
        const response = await fetch(`${app.url}/level/${id}`);
        if (response.ok) {
            const level = await response.json();

            const levelInHTML = document.querySelector(".main__conteneur-level-title");
            levelInHTML.textContent = level.name;
        }
        else {
            console.log(response);
        }
    },


};

document.addEventListener("DOMContentLoaded", app.init);
