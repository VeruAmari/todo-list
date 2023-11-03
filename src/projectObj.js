import { Todo } from './todoObj.js';

export class Project {

    #title;
    #status;
    #todoList;

    constructor(title) {
        // Prevent title size from surpassing 30 characters length
        this.#title = (title.length <= 30) ? title : title.slice(0, 29);
        // Initial status of a project is obviously "undone", so false
        this.#status = false;
        // Initialize empty array
        this.#todoList = [];
    };


    // Title methods//
    getTitle() { return this.#title };

    setTitle(newTitle) { this.#title = newTitle };


    // Status methods //
    getStatus() { return this.#status };

    toggleStatus() {
        this.#status = this.#status ? false : true;
    };


    // Todo List methods //
    addTodoList(todo) {
        // Reject operation if input isn't a Todo Obj
        console.log("Attempting to add To-do.")
        if (todo instanceof Todo) {
            this.#todoList.push(todo);
            console.log("To-do added successfully");
            return true;
        } else {
            console.log("Failed to add To-do, item isn't a Todo Obj.");
            return false
        };
    };

    getTodoList() { return this.#todoList };

    removeTodo(index) {
        console.log("Removing Todo-list at index " + index);
        this.#todoList.splice(index, 1);
    };

};

