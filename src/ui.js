class UIBasics {
    constructor () {
        this._id;
        this._title;
        this._status;
        this._statusBool;
    };

    updateTitle(newTitle) { this._title.textContent = newTitle };

    toggleStatus() {
        this._statusBool = !this._statusBool;
        this._statusBool ? this._status.textContent = "✔️" : this._status.textContent = "_";
        
        this._status.classList.toggle("complete");
        this._status.classList.toggle("in-progress");
    };

    // Getters
    getId = () => { return this._ID };
    getStatus = () => { return this._status };
    getTitle = () => { return this._title };
};

// Class that creates a Project card container and all it's inner elements
export class UIProject extends UIBasics {
    #idNum;
    #titleContainer;
    #todosContainer;
    #container;

    constructor(title) {
        super();
        console.log("Starting " + title + " UIProject creation.")
        this.#idNum = UIProject.id;
        UIProject.id++;

        // Public attributes
        this._title = this.#makeTitle(title);
        this._ID = "project-" + this.#idNum;
        this._statusBool = false;
        this._status = this.#makeStatus();

        // Private attributes
        this.#titleContainer = this.#makeTitleContainer(this._title, this._status);
        this.#todosContainer = this.#makeTodosContainer();
        this.#container = this.#makeContainer(this._ID, this.#titleContainer, this.#todosContainer);

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

    appendTodo(element) {
        this.#todosContainer.appendChild(element);
    };

};

// Class that creates a Todo card container and all it's inner elements.
export class UITodo extends UIBasics {
    #idNum;
    #titleContainer;
    #description;
    #due;
    #priority;
    #notes;
    #checklist;
    #todoContainer;

    constructor(title, description, due, priority, notes){
        super();

        console.log("Starting " + title + " UITodo creation.");
        this.#idNum = UITodo.id;
        UITodo.id++;

        // Public attributes
        this._ID =  "todo-" + this.#idNum;
        this._title = this.#makeTitle(title);
        this._statusBool = false;
        this._status = this.#makeStatus();

        // Private attributes
        this.#titleContainer = this.#makeTitleContainer(this._title, this._status);
        this.#description = this.#makeDescription(description);
        this.#due = this.#makeDue(due);
        this.#priority = this.#makePriority(priority);
        this.#notes = this.#makeNotes(notes);
        this.#checklist = this.#makeChecklistContainer();
        this.#todoContainer = this.#makeTodoContainer(
            this.ID, [
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

    // Start of own methds //

    appendChecklist(element) {
        this.#checklist.appendChild(element);
    };

    getTodo = () => { return this.#todoContainer };
};
