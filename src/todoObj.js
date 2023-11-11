// import {ChecklistItem} from './checklistObj';

export class Todo {

    #ID
    #pID
    #title;
    #description;
    #due;
    #priority;
    #notes;
    #checklistIDs;
    #status;

    constructor(title, description, due, priority, notes, projectID, id, chklstIDs, statusBool) {
        this.#ID;
        if (id) { 
            console.log("Retrieving existing Todo id#" + id);
            this.#ID = id
            Todo.id = id;
        }
        else {
            console.log("Creating new Todo id#" + id);
            this.#ID = Todo.id;
        };
        Todo.id++;

        this.#pID = projectID;
        this.#title = title ? title : "-";
        this.#description = description ? description : "-";
        this.#due = due ? due : "--/--/----";
        this.#priority = (priority >= 0 && priority <= 3) ? priority : 0;
        this.#notes = notes ? notes : "-";
        this.#checklistIDs = chklstIDs ? chklstIDs : [];
        this.#status = statusBool ? statusBool : false;
    };
    static id = 0;


    // Getter methods //
    getTitle = () => this.#title;

    getDescription = () => this.#description;

    getDue = () => this.#due;

    getPriority = () => this.#priority;

    getNotes = () =>  this.#notes ;

    getStatus = () => this.#status;

    getChecklist = () => this.#checklistIDs;

    getID = () => this.#ID;

    getProjectId = () => this.#pID;


    // Setter methods //
    setTitle = (newTitle) => { this.#title = newTitle };

    setDescription = (newDescription) => { this.#description = newDescription };

    setDue = (newDue) => { this.#due = newDue };

    setPriority = (newPriority) => {
        if (newPriority >= 0 && newPriority <= 10) {
            this.#priority = newPriority
            return true;
        } else {
            return false;
        }
    };

    setNotes = (newNotes) => { this.#notes = newNotes };

    addChecklistItem = (newChecklistItem) => { this.#checklistIDs.push(newChecklistItem); };


    // Toggles and Deleters //
    removeChecklistItem = (id) => {
        console.log("Removing checklist-item " + id);
        const index = this.#checklistIDs.indexOf(id);
        this.#checklistIDs.splice(index, 1);
    };

    toggleStatus = () => {
        this.#status = this.#status ? false : true;
    };

};
