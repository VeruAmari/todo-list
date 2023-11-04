export class Project {

    #title;
    #status;
    #todoList;

    constructor(title) {
        // Prevent title size from surpassing 30 characters length
        console.log("Creating new Project: " + title);
        this.#title = (title.length <= 30) ? title : title.slice(0, 29);
        // Initial status of a project is obviously "undone", so false
        this.#status = false;
        // Initialize empty array
        this.#todoList = [];
    };


    // Title methods//
    getTitle = () => this.#title;

    setTitle = (newTitle) => { this.#title = newTitle };


    // Status methods //
    getStatus = () => this.#status ;

    toggleStatus = () => {
        this.#status = this.#status ? false : true;
    };


    // Todo List methods //
    addTodo = (todo) => {
        this.#todoList.push(todo);
        console.log("To-do added successfully.");
    };

    getTodoList = () => this.#todoList ;

    removeTodo = (index) => {
        console.log("Removing Todo-list at index " + index);
        this.#todoList.splice(index, 1);
    };

};
