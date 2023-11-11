// Class that contains shared getter and setter methods to be inherited:
class UIBasics {
    constructor (id, status) {
        this._ID = id;
        this._divID;
        this._title;
        this._status;
        this._statusBool = status;
        this._titleContainer;
        this._type;
    };

    updateTitle(newTitle) { this._title.textContent = newTitle };

    toggleStatus() {
        this._statusBool = !this._statusBool;
        this._statusBool ? this._status.textContent = "✔️" : this._status.textContent = "⭕";
        
        this._status.classList.toggle("complete");
        this._status.classList.toggle("in-progress");
    };

    // Makers //
    //###############################################//
    _makeTitle(type, text){
        const title = document.createElement("span");
        title.classList.add(type,"title");
        title.textContent = text;
        return title;
    };

    _makeStatus(type, statusBool){
        const status = document.createElement("button");
        status.classList.add(type, "status-btn", "in-progress");
    
        if (!statusBool){status.classList.add("in-progress"); status.textContent = "⭕";} else {
                        status.classList.add("complete"); status.textContent = "✔️";};

        return status;
    };

    _makeTitleContainer(type, title, status){
        const titleContainer = document.createElement("div");
        titleContainer.classList.add(type, "title", "container");
        titleContainer.appendChild(title);
        titleContainer.appendChild(status);
    
        return titleContainer;
    };

    _makeContainer(id,type, ...elements){
        const container = document.createElement("div");
        container.id = id;
        container.classList.add(type + "-container");
        elements.forEach(element => {
            container.appendChild(element);
        });
    
        return container;
    };

    // Getters
    getdID = () => { return this._divID };
    getStatus = () => { return this._status };
    getTitle = () => { return this._title };
};

// Class that creates a Project card container and all it's inner elements
export class UIProject extends UIBasics {
    #todosContainer;
    #container;

    constructor(id, title, status) {
        console.log("Starting UIProject #" + id + " creation.")
        super(id, status);

        // Public attributes
        this._type = "project";
        this._title = this._makeTitle(this._type, title);
        this._divID = this._type + "-" + this._ID;
        this._status = this._makeStatus(this._type, this._statusBool);
        this._titleContainer = this._makeTitleContainer(this._type, this._title, this._status);

        // Private attributes
        this.#todosContainer = this.#makeTodosContainer();
        this.#container = this._makeContainer(this._divID, this._type, this._titleContainer, this.#todosContainer);

        // Finishing up
        this.#finishUp();
        console.log("UIProject #" + id + " creation successful.")
    };

    /* Initial setup private methods */
    //##############################################################//


    #makeTodosContainer() {
        const todos = document.createElement("div");
        todos.classList.add("todos","container");
    
        return todos;
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
    #titleContainer;
    #description;
    #due;
    #priority;
    #notes;
    #checklist;
    #container;

    constructor(id, title, description, due, priority, notes, status){
        console.log("Starting UITodo #" + id + " creation.");
        super(id, status);
        // Public attributes
        this._type = "todo";
        this._divID =  this._type + "-" + this._ID;
        this._title = this._makeTitle(this._type , title);
        this._status = this._makeStatus(this._type, this._statusBool);

        // Private attributes
        this.#titleContainer = this._makeTitleContainer(this._type ,this._title, this._status);
        this.#description = this.#makeDescription(description);
        this.#due = this.#makeDue(due);
        this.#priority = this.#makePriority(priority);
        this.#notes = this.#makeNotes(notes);
        this.#checklist = this.#makeChecklistContainer();
        this.#container = this._makeContainer(
            this._divID,
            this._type,
            this.#titleContainer,
            this.#description,
            this.#due,
            this.#priority,
            this.#notes,
            this.#checklist
        );

        console.log("UITodo #" + id + " creation successful.");
    };

    // Initial setup private methods //
    //#########################################################//

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

    //#########################################################//

    // Start of own methds //

    appendChecklist(element) {
        this.#checklist.appendChild(element);
    };

    getTodo = () => { return this.#container };
};

export class UIChecklistItem extends UIBasics {
    #container
    constructor (id, title, status) {
        super(id, status);
        // Public attributes //
        this._type = "checklist-item"
        this._divID = this._type + "-" + this._ID;
        this._title = this._makeTitle("checklist-item", title);
        this._status = this._makeStatus("checklist-item", this._statusBool);
        this._titleContainer = this._makeTitleContainer(this._type, this._title, this._status);

        // Private attributes //
        this.#container = this._makeContainer(
            this._divID,
            this._type,
            this._titleContainer
        );

    };

    getChecklistItem = () => { return this.#container };
};