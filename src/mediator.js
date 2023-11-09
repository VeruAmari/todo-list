import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';
import { Checklist } from './checklistObj.js';
import { UIProject, UITodo } from './ui.js';
import { database } from './dbHandler.js';
import { format } from 'date-fns'


export function fetchExistingData() {
    console.log(localStorage);
};
export function initialRender() {
};


export function makeNewProject(...arglist) {
    // Process user input through Project class
    const projectData = new Project(arglist);
    // Add sanitized data to UI
    const projectUI = new UIProject(projectData.getID(),projectData.getTitle());

    // TODO: Add data to database (localStorage will do for now)
    //
    database().newProject(
        projectData.getID(),
        projectData.getTitle(),
        projectData.getTodoList(),
        projectData.getStatus());


    // Add ProjectUI event listeners
    //
    function toggleAll() {
        projectUI.toggleStatus();
        projectData.toggleStatus();
    };
    
    function updateTitle(event) {
        // TODO: On double click, display a field to enter the new title
        const newTitle = "title changed";
        projectData.updateTitle(newTitle);
        projectUI.updateTitle(newTitle);
    };

    projectUI.getStatus().addEventListener("click", toggleAll);
    projectUI.getTitle().addEventListener("dblclick", updateTitle);


    // Utility methods to return
    //
    function getDivID() {
        return projectUI.getProjectId;
    };

    function appendTodo(todo) {
        projectUI.appendTodo(todo);
    };


    return { getDivID, updateTitle, appendTodo };
};


export function makeNewTodo(...arglist) {
    // User provided rguments are first sanitized through Todo data class
    // Args: title, description, due, priority, notes
    const todoData = new Todo(...arglist);

    // Once sanitized, they are added to the document.
    const todoUI = new UITodo(
        todoData.getTitle(),
        todoData.getDescription(),
        todoData.getDue(),
        todoData.getPriority(),
        todoData.getNotes()
        );


    // Add Todo to database
    //
    database().newTodo(
        todoData.getID(),
        todoData.getTitle(),
        todoData.getDescription(),
        todoData.getDue(),
        todoData.getPriority(),
        todoData.getNotes(),
        todoData.getProjectId(),
        todoData.getChecklist(),
        todoData.getStatus());



    // Add Todo event listeners
    //
    function toggleAll() {
        todoUI.toggleStatus();
        todoData.toggleStatus();
    };

    todoUI.getStatus().addEventListener("click", toggleAll);


    // Utility methods to return
    //
    function getTodoNode () {
        return todoUI.getTodo();
    };


    return { getTodoNode };
};


export function testFunction() {
    const project1 = makeNewProject("To Do List");
    const project2 = makeNewProject("D&D Rogue Concept");

    // Takes in a Title, Description, Due Date, Priority and Notes
    // TODO: format DATE using date-fns (https://date-fns.org/docs/Getting-Started/)
    const todo1 = makeNewTodo("Plan ahead",
                        "Create code module-architecture in pseudo-code for better results. Should keep in mind the SOLID principles.",
                        format( new Date(3045,1,10), 'dd/MM/yyyy'),
                        5,
                        "Must not be upside-down.");

    const todo2 = makeNewTodo("Create modules files.", "Creating modules files following the pre-planned architecture.", format(new Date(3045,1,10), 'dd/MM/yyyy'), "a", "This one SHOULD be upside down.");

    const todo3 = makeNewTodo("Search for art references.", "A good concept art starts with a good reference search. Build the theme and aesthetics of the character throug visual exploration.", format(new Date(3045,1, 10), 'dd/MM/yyyy'), 3, "To be upside down or not to be upside down?");

    project1.appendTodo(todo1.getTodoNode());
    project1.appendTodo(todo2.getTodoNode());

    project2.appendTodo(todo3.getTodoNode());

};
