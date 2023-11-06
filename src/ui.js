/* Pseudocode OOooOoOoohhh */

// Function that create a Project card:
export class UIProject {
    constructor(title, parentQuery) {
        this.idNum = UIProject.id;
        UIProject.id++;

        this.title = this.#makeTitle(title);
        this.containerID = "project-" + this.idNum;
        this.status = this.#makeStatus();
        this.titleContainer = this.#makeTitleContainer(this.title, this.status);
        this.todosContainer = this.#makeTodosContainer();
        this.container = this.#makeContainer(this.containerID, this.titleContainer, this.todosContainer);

        // Finishing up
        this.#finishUp(parentQuery);
    };
    static id = 0;

    #makeContainer(id, title, todos) {
        console.log("Creating project container")
        const container = document.createElement("div");
        container.classList.add("project", "container");
        container.id = id;
        container.appendChild(title);
        container.appendChild(todos);

        return container;
    };

    #makeStatus() {
        const status =  document.createElement("span");
        status.classList.add("project","status");
        status.textContent = "In Progress";
        return status;
    };

    #makeTitle(text) {
        const title = document.createElement("span");
        title.classList.add("project","title-text");
        title.textContent = text;
        return title;
    };

    #makeTitleContainer(title, status) {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("project", "title-container");
        titleContainer.appendChild(title);
        titleContainer.appendChild(status);
        return titleContainer;
    };

    #makeTodosContainer() {
        const todos = document.createElement("div");
        todos.classList.add("todos","container");
        return todos;
    };

    #finishUp(query) {
        const parent = document.querySelector(query);
        parent.appendChild(this.container);
        return parent;
    };

    updateTitle(newTitle) { this.title.textContent = newTitle };
    
    updateStatus(newStatus) { this.status.textContent = newStatus };

    getProjectId = () => { return this.containerID };

//// It has a TITLE - Beside it, there's status Display
//// It has a TODO LIST space
};



// Function that displays a single Todo in a Project object
//// It has a TITLE 
//// It has a 