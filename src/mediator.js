import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';
import { Checklist } from './checklistObj.js';
import { UIProject, UITodo } from './ui.js';
import {} from './dbHandler.js';

function dbHandler (){
    sessionStorage.setItem()
};

export function newProject (title) {
    const projectData = new Project(title);
    const projectUI = new UIProject(title);

    // ProjectUI event listeners
    projectUI.getStatus().addEventListener("click", toggleStatus);
    projectUI.getTitle().addEventListener("dblclick", updateTitle);

    function toggleStatus() {
        projectUI.toggleStatus();
        projectData.toggleStatus();
    };

    function getID() {
        return projectUI.getProjectId;
    };

    function updateTitle(event) {
        // TODO: On double click, display a field to enter the new title
        const newTitle = "title changed";
        projectData.updateTitle(newTitle);
        projectUI.updateTitle(newTitle);
    };

    function appendTodo(todo) {
        projectUI.appendTodo(todo);
    };
    return { getID, updateTitle, appendTodo };
};

export function newTodo (title, description, due, priority, notes) {
    const todoData = new Todo(
                            title,
                            description,
                            due,
                            priority,
                            notes
                            );

    const todoUI = new UITodo(
                    todoData.getTitle(),
                    todoData.getDescription(),
                    todoData.getDue(),
                    todoData.getPriority(),
                    todoData.getNotes()
                    );

    function getTodoNode () {
        return todoUI.getTodo();
    };
    return { getTodoNode };
};

export function testFunction(){
    const project1 = newProject("Test Project 1");
    const project2 = newProject("Test Project 2")
    const test1 = newTodo("Test TodoObj 1", "Testing notes for todo object 1.", "Due Right now 1!", 1, "Does this work 1?");

    const test2 = newTodo("Test TodoObj 2", "Testing notes for todo object 2.", "Due Right now 2!", "a", "Does this work 2?");

    const test3 = newTodo("Test TodoObj 3", "Testing notes for todo object 3.", "Due Right now 3!", 3, "Does this work 3?");

    project1.appendTodo(test1.getTodoNode());
    project1.appendTodo(test2.getTodoNode());


    project2.appendTodo(test3.getTodoNode());


    //testProject.addTodo(test1);
    //testProject.addTodo(test2);
    //testProject.addTodo(test3);

    //console.log(testProject);
    //console.log("Calling getTodoList");
    //console.log(testProject.getTodoList());
    //testProject.removeTodo(1);
    //console.log(testProject, testProject.getTodoList());
};
