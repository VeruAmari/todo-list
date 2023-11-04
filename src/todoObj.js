export class Todo {

    #title;
    #description;
    #due;
    #priority;
    #notes;
    #checklist;
    #status;

    constructor(title, description, due, priority, notes) {
        console.log("Creating new Todo: " + title);
        this.#title = title;
        this.#description = description;
        this.#due = due;
        this.#priority = (priority >= 0 && priority <= 10) ? priority : 0;
        this.#notes = notes;
        this.#checklist = [];
        this.#status = false;
    };


    // Title methods //
    getTitle = () => this.#title;

    setTitle = (newTitle) => { this.#title = newTitle };


    // Description methods //
    getDescription = () => this.#description;

    setDescription = (newDescription) => { this.#description = newDescription };


    // Due Date-time methods //
    getDue = () => this.#due;

    setDue = (newDue) => { this.#due = newDue };


    // Priority methods //
    getPriority = () => this.#priority;

    setPriority = (newPriority) => {
        if (newPriority >= 0 && newPriority <= 10) {
            this.#priority = newPriority
            return true;
        } else {
            return false;
        }
    };


    // Notes methods //
    getNotes = () => { this.#notes };

    setNotes = (newNotes) => { this.#notes = newNotes };


    // Checklist methods //
    getChecklist = () => this.#checklist;
    addChecklistItem = (newChecklistItem) => { this.#checklist.push(newChecklistItem); };
    removeChecklistItem = (index) => { this.#checklist.splice(index, 1); };


    // Status methods //
    getStatus = () => this.#status;
    toggleStatus = () => {
        this.#status = this.#status ? false : true;
    };
};
