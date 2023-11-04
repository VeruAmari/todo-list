/* Pseudocode OOooOoOoohhh */

// Function that create a Project card:
export class UIProject {
    constructor(title) {
        this.container = document.createElement("div");
        this.container.classList.add("project", "container");
        this.container.id = "project-" + UIProject.id;
        UIProject.id++;

        this.title = document.createElement("div");
        this.title.classList.add("project", "title");
        this.title.textContent = title;
        this.container.appendChild(this.title);
        document.querySelector(".body.inner-container").appendChild(this.container);
    };
    static id = 0;
//// It has a TITLE - Beside it, there's status Display
//// It has a TODO LIST space
};



// Function that displays a single Todo
//// It has a TITLE 
//// It has a 