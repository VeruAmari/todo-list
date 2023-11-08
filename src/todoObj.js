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

    constructor(title, description, due, priority, notes, projectID) {
        this.#ID = Todo.id;
        Todo.id++;
        this.#pID = projectID;
        console.log("Creating new Todo: " + title);
        this.#title = title;
        this.#description = description;
        this.#due = due;
        this.#priority = (priority >= 0 && priority <= 10) ? priority : 0;
        this.#notes = notes;
        this.#checklistIDs = [];
        this.#status = false;
    };
    static id = 0;


    // Getter methods //
    getTitle = () => this.#title;

    getDescription = () => this.#description;

    getDue = () => this.#due;

    getPriority = () => this.#priority;

    getNotes = () => { this.#notes };

    getStatus = () => this.#status;

    getChecklist = () => this.#checklistIDs;

    getID = () => this.#ID;

    getParentId = () => this.#pID;


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
