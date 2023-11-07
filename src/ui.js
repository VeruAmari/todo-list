/* Pseudocode OOooOoOoohhh */

// Function that create a Project card:
export class UIProject {
    #idNum;
    #title;
    #containerID;
    #statusBool;
    #status;
    #titleContainer;
    #todosContainer;
    #container;

    constructor(title) {
        console.log("Starting " + title + " UIProject creation.")
        this.#idNum = UIProject.id;
        UIProject.id++;

        this.#title = this.#makeTitle(title);
        this.#containerID = "project-" + this.#idNum;
        this.#statusBool = false;
        this.#status = this.#makeStatus();
        this.#titleContainer = this.#makeTitleContainer(this.#title, this.#status);
        this.#todosContainer = this.#makeTodosContainer();
        this.#container = this.#makeContainer(this.#containerID, this.#titleContainer, this.#todosContainer);

        // Finishing up
        this.#finishUp();
        console.log(title + " UIProject creation successful.")
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
        parent.appendChild(this.#container);
    };
    //##############################################################//

    updateTitle(newTitle) { this.#title.textContent = newTitle };

    toggleStatus() {
        this.#statusBool = !this.#statusBool;
        this.#statusBool ? this.#status.textContent = "✔️" : this.#status.textContent = "_";

        this.#status.classList.toggle("complete");
        this.#status.classList.toggle("in-progress");

    };

    appendTodo(element) {
        this.#todosContainer.appendChild(element);
    };

    // Getters
    getProjectId = () => { return this.#containerID };
    getStatus = () => { return this.#status };
    getTitle = () => { return this.#title };
};

export class UITodo {
    #idNum;
    #id;
    #title;
    #status;
    #titleContainer;
    #description;
    #due;
    #priority;
    #notes;
    #checklist;
    #statusBool;
    #todoContainer;

    constructor(title, description, due, priority, notes){
        console.log("Starting " + title + " UITodo creation.");
        this.#idNum = UITodo.id;
        UITodo.id++;

        this.#id =  "todo-" + this.#idNum;
        this.#title = this.#makeTitle(title);
        this.#statusBool = false;
        this.#status = this.#makeStatus();
        this.#titleContainer = this.#makeTitleContainer(this.#title, this.#status);
        this.#description = this.#makeDescription(description);
        this.#due = this.#makeDue(due);
        this.#priority = this.#makePriority(priority);
        this.#notes = this.#makeNotes(notes);
        this.#checklist = this.#makeChecklistContainer();
        this.#todoContainer = this.#makeTodoContainer(
            this.#id, [
            this.#titleContainer,
            this.#description,
            this.#due,
            this.#priority,
            this.#notes,
            this.#checklist
        ]);

        console.log( title + " UITodo creation successful.");
    };
    static id = 0;

    // Initial setup private methods //
    //#########################################################//
    #makeTitle(text) {
        const title = document.createElement("span");
        title.classList.add("todo","title");
        title.textContent = text;
        return title;
    };
    #makeStatus() {
        const status = document.createElement("span");
        status.classList.add("todo","status");
        status.textContent = "_";
    
        return status;
    };

    #makeTitleContainer(title, status) {
        const container = document.createElement("div");
        container.classList.add("title","container");
        container.appendChild(title);
        container.appendChild(status);
    
        return container;
    };

    #makeDescription(text){
        const description = document.createElement("div");
        description.classList.add("todo","description");
        description.textContent = text;
    
        return description;
    };

    #makeDue(text) {
        const dueContainer = document.createElement("div");
        dueContainer.classList.add("todo","due");
        dueContainer.textContent = text;
    
        return dueContainer;
    };

    #makePriority(text) {
        const priority = document.createElement("div");
        priority.classList.add("todo","priority");
        priority.textContent = text;
    
        return priority;
    };

    #makeNotes(text) {
        const notes = document.createElement("div");
        notes.classList.add("todo","notes");
        notes.textContent = text;
    
        return notes;
    };

    #makeChecklistContainer() {
        const checklistContainer = document.createElement("div");
        checklistContainer.classList.add("todo","checklist");
    
        return checklistContainer;
    };

    #makeTodoContainer(id, arr){
        const todoContainer = document.createElement("div");
        todoContainer.id = id;
        arr.forEach(element => {
            todoContainer.appendChild(element);
        });
    
        return todoContainer;
    };
    //#########################################################//

    // Start of methds //

    updateTitle(newTitle) { this.#title.textContent = newTitle };

    toggleStatus() {
        this.#statusBool = !this.#statusBool;
        this.#statusBool ? this.#status.textContent = "✔️" : this.#status.textContent = "_";

        this.#status.classList.toggle("complete");
        this.#status.classList.toggle("in-progress");
    };

    appendChecklist(element) {
        this.#checklist.appendChild(element);
    };

    getTodoId = () => { return this.#id };
    getStatus = () => { return this.#status };
    getTitle = () => { return this.#title };
    getTodo = () => { return this.#todoContainer };
};

// Function that displays a single Todo in a Project object
//// It has a TITLE 
//// It has a 