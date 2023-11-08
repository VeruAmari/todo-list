export class Project {

    #ID
    #title;
    #status;
    #todoListIDs;

    constructor(title) {
        // Prevent title size from surpassing 30 characters length
        console.log("Creating new Project: " + title);
        this.#ID = Project.id;
        Project.id++;
        this.#title = (title.length <= 30) ? title : title.slice(0, 29);
        // Initial status of a project is obviously "undone", so false
        this.#status = false;
        // Initialize empty array
        this.#todoListIDs = [];
    };
    static id = 0;


    // Getter methods//
    getTitle = () => this.#title;

    getStatus = () => this.#status ;

    getTodoList = () => this.#todoListIDs ;

    getID = () => this.#ID;


    // Setter methods //
    updateTitle = (newTitle) => {
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
