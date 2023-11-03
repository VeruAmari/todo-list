export class Todo {

    #title;
    #description;
    #due;
    #priority;
    #notes;
    #checklist;

    constructor(title, description, due, priority = 0, notes, checklist) {
        this.#title = title;
        this.#description = description;
        this.#due = due;
        this.#priority = (priority >= 0 && priority <= 10) ? priority : 0;
        this.#notes = notes;
        this.#checklist = checklist;
    };


    // Title methods //
    getTitle() { return this.#title };

    setTitle(newTitle) { this.#title = newTitle };


    // Description methods //
    getDescription() { return this.#description };

    setDescription(newDescription) { this.#description = newDescription };


    // Due Date-time methods //
    getDue() { return this.#due };

    setDue(newDue) { this.#due = newDue };


    // Priority methods //
    getPriority() { return this.#priority };

    setPriority(newPriority) {
        if (newPriority >= 0 && newPriority <= 10) {
            this.#priority = newPriority
            return true;
        } else {
            return false;
        }
    };


    // Notes methods //
    getNotes() { return this.#notes };

    setNotes(newNotes) { this.#notes = newNotes };


    // Checklist methods //
    getChecklist() { return this.#checklist };
    setChecklist(newChecklist) { this.#checklist = newChecklist };

};
