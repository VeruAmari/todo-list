import { Todo } from './todoObj.js';

export class Project {

    #title;
    #status;
    #todoList;

    constructor(title) {
        this.#title = title;
        this.#status = "In Progress";
        this.#todoList = [];
    };


    // Title methods//
    getTitle() { return this.#title };

    setTitle(newTitle) { this.#title = newTitle };


    // Status methods //
    getStatus() { return this.#status };

    toggleStatus() {
        this.#status === "ToDo" ? this.#status = "Done!" : "ToDo"
    };

    // Todo List methods //
    addTodoList(todo) {
        if (todo instanceof Todo) {
            this.#todoList.push(todo);
            return true;
        } else {
            return false
        };
    };
    getTodoList() { return this.#todoList };
    removeTodo(index) {
        console.log("Removing Todo-list at index " + index);
        this.#todoList.splice(index, 1);
    };

};

export function testFunction(){
    const test1 = new Todo("Title Test 1", "Some testing object 1.", "Right now 1!", 1, "Does this work 1?", {"one": true, "two": false});

    const test2 = new Todo("Title Test 2", "Some testing object 2.", "Right now 2!", "a", "Does this work 2?", {"two": true, "three": false});

    const test3 = new Todo("Title Test 3", "Some testing object 3.", "Right now 3!", 3, "Does this work 3?", {"three": true, "four": false});

    const testProject = new Project("Test Project");

    console.log(testProject.addTodoList(test1));
    console.log(testProject.addTodoList(test2));
    console.log(testProject.addTodoList(test3));

    //console.log(testProject);

    console.log(testProject.getTodoList());
    //testProject.removeTodo(1);
    //console.log(testProject, testProject.getTodoList());
}
