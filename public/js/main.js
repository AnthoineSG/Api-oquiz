const app = {
    init() {
        console.log("hello");
        // app.allLevel();
    },



    async allLevel() {
        const response = await fetch("http://localhost:8080/level");
        if (response.ok) {
            const allLevels = await response.json();

            const template = document.querySelector("#level");
            const clone = document.importNode(template.content, true);

            const listLevel = clone.querySelector(".list-level");

            allLevels.forEach(level => {
                const titleLevel = document.createElement("li");
                titleLevel.textContent = level.name;
                listLevel.appendChild(titleLevel);
            });

            document.querySelector("#conteneur").appendChild(clone);
        }
    },


};

document.addEventListener("DOMContentLoaded", app.init);
