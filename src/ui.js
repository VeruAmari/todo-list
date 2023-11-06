/* Pseudocode OOooOoOoohhh */

// Function that create a Project card:
export class UIProject {
    constructor(title) {
        console.log("Creating " + title + " UIProject.")
        this.idNum = UIProject.id;
        UIProject.id++;

        this.title = this.#makeTitle(title);
        this.containerID = "project-" + this.idNum;
        this.statusBool = false;
        this.status = this.#makeStatus();
        this.titleContainer = this.#makeTitleContainer(this.title, this.status);
        this.todosContainer = this.#makeTodosContainer();
        this.container = this.#makeContainer(this.containerID, this.titleContainer, this.todosContainer);

        // Finishing up
        this.#finishUp();
        console.log(title + " UIProject created.")
    };
    static id = 0;

    /* Initial setup private methods */
    //##############################################################//

    #makeTitle(text) {
        const title = document.createElement("span");
        title.classList.add("project","title-text");
        title.textContent = text;

        return title;
    };

    #makeStatus() {
        const statusBool =  document.createElement("button");
        statusBool.classList.add("project","statusBool","in-progress");
        statusBool.textContent = "_";

        return statusBool;
    };

    #makeTitleContainer(title, statusBool) {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("project", "title-container");
        titleContainer.appendChild(title);
        titleContainer.appendChild(statusBool);
        
        return titleContainer;
    };

    
    #makeTodosContainer() {
        const todos = document.createElement("div");
        todos.classList.add("todos","container");
        
        return todos;
    };

    #makeContainer(id, title, todos) {
        const container = document.createElement("div");
        container.classList.add("project", "container");
        container.id = id;
        container.appendChild(title);
        container.appendChild(todos);

        return container;
    };

    #finishUp() {
        const parent = document.querySelector(".body.inner-container");
        parent.appendChild(this.container);
    };
    //##############################################################//

    updateTitle(newTitle) { this.title.textContent = newTitle };

    toggleStatus = () => {
        this.statusBool = this.statusBool ? false : true;
        if (this.statusBool) {
            this.status.textContent = "✔️"
            this.status.classList.toggle("complete");
            this.status.classList.toggle("in-progress");
        } else {
            this.status.textContent = "_";
            this.status.classList.toggle("complete");
            this.status.classList.toggle("in-progress");
        };

    };

    appendTodo(element) {
        this.todosContainer.appendChild(element);
    };

    getProjectId = () => { return this.containerID };

};

export class UITodo {
    constructor(title, description, due, priority, notes){
        this.idNum = UITodo.id;
        UITodo.id++;

        this.title = this.#makeTitle(title);

    };
    static id = 0;

    #makeTitle(text) {
        const title = document.createElement("span");
        title.classList.add("todo","title");
        title.textContent = text;
    };
};

// Function that displays a single Todo in a Project object
//// It has a TITLE 
//// It has a 