import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';
import { Checklist } from './checklistObj.js';
import { UIProject, UITodo } from './ui.js';
import { database } from './dbHandler.js';

export function renderProject (...arglist) {
    // Process user input through Project class
    const projectData = new Project(arglist);
    // Add sanitized data to UI
    const projectUI = new UIProject(projectData.getID(),projectData.getTitle());

    // TODO: Add data to database (localStorage will do for now)

    // Add ProjectUI event listeners
    projectUI.getStatus().addEventListener("click", toggleStatus);
    projectUI.getTitle().addEventListener("dblclick", updateTitle);

    function toggleStatus() {
        projectUI.toggleStatus();
        projectData.toggleStatus();
    };

    function getDivID() {
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
    return { getDivID, updateTitle, appendTodo };
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
    const project1 = renderProject("To Do List");
    const project2 = renderProject("D&D Rogue Concept");

    // Takes in a Title, Description, Due Date, Priority and Notes
    // TODO: format DATE using date-fns (https://date-fns.org/docs/Getting-Started/)
    const todo1 = newTodo("Plan ahead",
                        "Create code module-architecture in pseudo-code for better results. Should keep in mind the SOLID principles.",
                        new Date(1/2/34),
                        5,
                        "Must not be upside-down.");

    const todo2 = newTodo("Create modules files.", "Creating modules files following the pre-planned architecture.", new Date(1/2/34), "a", "This one SHOULD be upside down.");

    const todo3 = newTodo("Search for art references.", "A good concept art starts with a good reference search. Build the theme and aesthetics of the character throug visual exploration.", new Date(1/2/34), 3, "To be upside down or not to be upside down?");

    project1.appendTodo(todo1.getTodoNode());
    project1.appendTodo(todo2.getTodoNode());

    project2.appendTodo(todo3.getTodoNode());


    //testProject.addTodo(test1);
    //testProject.addTodo(test2);
    //testProject.addTodo(test3);

    //console.log(testProject);
    //console.log("Calling getTodoList");
    //console.log(testProject.getTodoList());
    //testProject.removeTodo(1);
    //console.log(testProject, testProject.getTodoList());
};
