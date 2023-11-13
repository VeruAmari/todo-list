// Class that contains shared getter and setter methods to be inherited:
class UIBasics {
    constructor (id, statusBool) {
        this._ID = id;
        this._divID;
        this._title;
        this._status;
        this._statusBool = statusBool;
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
        status.classList.add(type, "status-btn");
    
        if (!statusBool){
            status.classList.add("in-progress");
            status.textContent = "⭕";
            }else{
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

    getProjectNode = () => { return this.#container };

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
        text = (text == 0) ? "Trivial" : text;
        text = (text == 1) ? "Low" : text;
        text = (text == 2) ? "Medium" : text;
        text = (text == 3) ? "High" : text;

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


export function formCreator () {

    function formContainer(type){
        const form = document.createElement("form");
        form.classList.add(type + "-container", "form");
        form.setAttribute("action", "#");
        return form;
    };

    function addFormElement(type, element, container, inputType){

        inputType = inputType ? inputType : "text";
        const title = document.createElement("div");
        title.classList.add(type, element, "container", "form");
        container.appendChild(title);
    
        // Make title input
        const input = document.createElement("input");
        input.setAttribute("type", inputType);
        input.setAttribute("placeholder", "New " + type + " " + element);
        input.setAttribute("name", element);
        if (inputType === "number") {
            input.setAttribute("min", 0);
            input.setAttribute("max", 3);
        };
        input.classList.add(type, element, "form");
        title.appendChild(input);
    };

    function addSubmitButton(container){

        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.classList.add("submit", "btn");
        submit.textContent = "Add";
        container.appendChild(submit);
    };

    function projectForm() {
        // Make project div
        const type = "project"
        const container = formContainer(type);
    
        // Make Title input field container
        addFormElement(type, "title", container);
    
        addSubmitButton(container);
    
        // Append to document
        document.querySelector(".body.inner-container").appendChild(container);
        return container;
    };

    function todoForm() {
        // Make todo form container
        const container = formContainer("todo")
        const type = "todo";

        // Make Title container
        addFormElement(type, "title", container);
        addFormElement(type, "description" ,container);
        addFormElement(type, "due", container, "date");
        addFormElement(type, "priority", container, "number");
        addFormElement(type, "notes" ,container);
    
        // Make Description input
        // Make Due Date input
        // Make Priority input
        // Make Notes input
        // Make submit button
        addSubmitButton(container);
    
        // Append to project
        return container;
    };

    function checklistItemForm() {
        const type = "checklist-item";
        const container = formContainer(type);
    
        addFormElement(type, "title", container);
        addSubmitButton(container);
    
        return container;
    };

    return { projectForm, todoForm, checklistItemForm };
};