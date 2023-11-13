import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';
import { Checklist, ChecklistItem } from './checklistObj.js';
import { UIChecklistItem, UIProject, UITodo, formCreator } from './ui.js';
import { database } from './dbHandler.js';
import { format } from 'date-fns'


// WARNING: THIS FUNCTION LOOKS LIKE SPAGHETTI
//
export function fetchExistingData() {
    let projects = database().getProjects();
    // Make sure there is data 
    console.log(projects)


    // Get projects
    //
    projects.forEach((projectID)=> {
        // Fetch project data from database
        const data = database().getData("project", projectID);
        // Make project using retreived data
        const project = makeNewProject(
            data["title"],
            data["id"],
            data["status"],
            data["todolistIDs"]);

        // Get todos data for current project
        database().getData("project", projectID)["todolistIDs"].forEach((todoID)=>{

            const tododata = database().getData("todo", todoID);
            const todo = makeNewTodo(
                tododata["title"],
                tododata["description"],
                tododata["due"],
                tododata["priority"],
                tododata["notes"],
                tododata["projectID"],
                tododata["id"],
                tododata["checklistIDs"],
                tododata["status"]
            );

            project.appendTodo(todo.getTodoNode());

            // Get checklist data for current todo
            database().getData("todo", todoID)["checklistIDs"].forEach((checkLIID)=>{
            
                const checklidata = database().getData("checklistitem", checkLIID);
                const clI = makeNewCheckLI(
                    checklidata["title"],
                    checklidata["todoID"],
                    checklidata["id"],
                    checklidata["status"],
                );
            
                // Append checklist item to todo.
                todo.appendChecklistItem(clI.getCLINode());
            });
        });

    });

};

export function initialRender(){
    const form = formCreator().projectForm();
    function handleP(event){
        event.preventDefault();
        console.log("Creating new Project from Form.");
        makeNewProject(event.target.title.value);
        //makeNewProject()
    };
    form.addEventListener("submit", handleP);
};


export function makeNewProject(...arglist) {
    // Process user input through Project class
    const projectData = new Project(...arglist);
    // Add sanitized data to UI
    const projectUI = new UIProject(
        projectData.getID(),
        projectData.getTitle(),
        projectData.getStatus()
    );

    database().newProject(
        projectData.getID(),
        projectData.getTitle(),
        projectData.getTodoList(),
        projectData.getStatus(),
        );

    // Add Todo form

    function handleT(event){
        event.preventDefault();
        console.log("Creating new Todo from form.");
        console.log(event.target);
        projectUI.appendTodo(
            makeNewTodo(
                event.target.title.value,
                event.target.description.value,
                event.target.due.value,
                event.target.priority.value,
                event.target.notes.value,
                projectData.getID(),
            ).getTodoNode()
        );
    };

    const form = formCreator().todoForm()
    form.addEventListener("submit", handleT);
    projectUI.appendTodo(form);

    // Add ProjectUI event listeners
    //
    function toggleAll() {
        projectUI.toggleStatus();
        projectData.toggleStatus();
        database().modifyData("project",projectData.getID(), "status", projectData.getStatus());
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
    //function updateProject(){};

    function getID(){
        return projectData.getID();
    };

    function getProjectNode(){
        return projectUI.getProjectNode();
    };

    return { getDivID, updateTitle, appendTodo, getID, getProjectNode };
};

export function makeNewTodo(...arglist) {
    // User provided rguments are first sanitized through Todo data class
    // Args: title, description, due, priority, notes
    const todoData = new Todo(...arglist);

    // Once sanitized, they are added to the document.
    //
    const todoUI = new UITodo(
        todoData.getID(),
        todoData.getTitle(),
        todoData.getDescription(),
        todoData.getDue(),
        todoData.getPriority(),
        todoData.getNotes(),
        todoData.getStatus(),
    );

    // Add checklist item form
    //

    function handleC(event){
        event.preventDefault();
            event.preventDefault();
            console.log("Creating new Todo from form.");
            console.log(event.target);
            todoUI.appendChecklistItem(
                makeNewCheckLI(
                    event.target.title.value,
                    todoData.getID(),
                ).getCLINode());
        };

    const form = formCreator().checklistItemForm()
    form.addEventListener("submit", handleC);
    todoUI.appendChecklist(form);

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
        todoData.getStatus()
        );

    // Append todo to corresponding list in project database
    //
    //console.log("Debugging.\n", "Project failure is #", todoData.getProjectId());
    database().modifyData("project",todoData.getProjectId(),"todolistIDs", todoData.getID());

    // Add Todo event listeners
    //
    function toggleAll() {
        todoUI.toggleStatus();
        todoData.toggleStatus();
        database().modifyData("todo",todoData.getID(), "status", todoData.getStatus());
    };

    todoUI.getStatus().addEventListener("click", toggleAll);


    // Utility methods to return
    //
    function getTodoNode () {
        return todoUI.getTodo();
    };

    function getData() {
        return todoData;
    };

    function appendChecklistItem(cLI) {
        todoUI.appendChecklist(cLI);
    };

    function getID() { return todoData.getID() };

    return { getTodoNode, getData, appendChecklistItem, getID };
};


export function makeNewCheckLI(...arglist) {
    // User provided arguments are processed through Checklist data class
    // Initial arguments: title, todoID
    const checkLIData = new ChecklistItem(...arglist);

    const checkLIUI = new UIChecklistItem(
        checkLIData.getID(),
        checkLIData.getTitle(),
        checkLIData.getStatus()
    );

    // Add checklistitem to database
    //
    database().newChecklistItem(
        checkLIData.getID(),
        checkLIData.getTitle(),
        checkLIData.getTodoID(),
        checkLIData.getStatus()
    );

    // Append checklist item to list in corresponding todo
    database().modifyData("todo",checkLIData.getTodoID(),"checklistIDs", checkLIData.getID());


    // Add checklist item event listeners
    //
    function toggleAll() {
        checkLIUI.toggleStatus();
        checkLIData.toggleStatus();
        database().modifyData("checklistitem", checkLIData.getID(), "status", checkLIData.getStatus());
    };

    checkLIUI.getStatus().addEventListener("click", toggleAll);


    // Utility methods to return
    //
    function getCLINode() { return checkLIUI.getChecklistItem() };
    function getData() { return checkLIData };

    return { getCLINode, getData };

};

export function testFunction() {
    localStorage.clear();
    const project1 = makeNewProject("To Do List");
    const project2 = makeNewProject("D&D Rogue Concept");

    // Takes in a Title, Description, Due Date, Priority and Notes
    // TODO: format DATE using date-fns (https://date-fns.org/docs/Getting-Started/)
    const todo1 = makeNewTodo(
        "Plan ahead",
        "Create code module-architecture in pseudo-code for better results. Should keep in mind the SOLID principles.",
        format( new Date(3045,1,10), 'dd/MM/yyyy'),
        5,
        "Must not be upside-down.",
        project1.getID()
    );
    project1.appendTodo(todo1.getTodoNode());
    const cLI = makeNewCheckLI("Come up with module names.", todo1.getID());
    todo1.appendChecklistItem(cLI.getCLINode());


    const todo2 = makeNewTodo(
        "Create modules files.",
        "Creating modules files following the pre-planned architecture.",
        format(new Date(3045,1,10),'dd/MM/yyyy'),
        "a",
        "This one SHOULD be upside down.",
        project1.getID()
    );
    project1.appendTodo(todo2.getTodoNode());


    const todo3 = makeNewTodo(
        "Search for art references.",
        "A good concept art starts with a good reference search. Build the theme and aesthetics of the character throug visual exploration.",
        format(new Date(3045,1, 10), 'dd/MM/yyyy'),
        3,
        "To be upside down or not to be upside down?",
        project2.getID()
    );
    project2.appendTodo(todo3.getTodoNode());
    const cLI1 = makeNewCheckLI("Find references for sneaky characters.", todo3.getID());
    const cLI2 = makeNewCheckLI("Find references for kunoichi.", todo3.getID());
    const cLI3 = makeNewCheckLI("Find references for cool oriental rogue outfit.", todo3.getID());
    todo3.appendChecklistItem(cLI1.getCLINode());
    todo3.appendChecklistItem(cLI2.getCLINode());
    todo3.appendChecklistItem(cLI3.getCLINode());

};
