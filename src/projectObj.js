export class Project {

    #ID
    #title;
    #status;
    #todoListIDs;

    constructor(title, id, status, todos) {
        // Prevent title size from surpassing 30 characters length
        console.log("Creating new Project: " + title);
    
        if (id || id === 0) {
            this.#ID = id;
            console.log("project ID#", id, "provided.");
            Project.id = id;
        }
        else {
            console.log("No Project ID# provided, creating new ID#", Project.id);
            this.#ID = Project.id;
        };
        Project.id++;
        console.log("Project.id is now set to", Project.id);
    
        this.#title = title ? title : "-";
        // Initial status of a project is obviously "undone", so false
        this.#status = status ? status : false;
        // Initialize empty array
        this.#todoListIDs = todos ? todos : [];
    };
    static id = 0;


    // Getter methods//
    getTitle = () => this.#title;

    getStatus = () => this.#status ;

    getTodoList = () => this.#todoListIDs ;

    getID = () => this.#ID;


    // Setter methods //
    setTitle = (newTitle) => {
        this.#title = newTitle;
        console.log(this.#title);
    };

    addTodo = (todoID) => {
        this.#todoListIDs.push(todoID);
        console.log("To-do" + todoID + "added successfully.");
    };


    // Togglers and removers //
    toggleStatus = () => {
        this.#status = this.#status ? false : true;
    };

    removeTodo = (id) => {
        console.log("Removing Todo-list-item " + id);
        const index = this.#todoListIDs.indexOf(id);
        this.#todoListIDs.splice(index, 1);
    };
};
