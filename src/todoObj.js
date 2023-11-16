// import {ChecklistItem} from './checklistObj';

export default class Todo {
  #ID;

  #pID;

  #title;

  #description;

  #due;

  #priority;

  #notes;

  #checklistIDs;

  #status;

  constructor(
    title,
    description,
    due,
    priority,
    notes,
    projectID,
    id,
    chklstIDs,
    statusBool,
  ) {
    this.#ID;
    if (id || id === 0) {
      console.log(`Retrieving existing Todo id#${  id}`);
      this.#ID = id;
      Todo.id = id;
    } else {
      console.log(`Creating new Todo id#${  id}`);
      this.#ID = Todo.id;
    }
    Todo.id++;

    this.#pID = projectID;
    this.#title = title || "-";
    this.#description = description || "-";
    this.#due = due ? this.setDue(due) : "--/--/----";
    this.#priority = this.setPriority(priority);
    this.#notes = notes || "-";
    this.#checklistIDs = chklstIDs || [];
    this.#status = statusBool || false;
  }

  static id = 0;

  // Getter methods //
  getTitle = () => this.#title;

  getDescription = () => this.#description;

  getDue = () => this.#due;

  getPriority = () => this.#priority;

  getNotes = () => this.#notes;

  getStatus = () => this.#status;

  getChecklist = () => this.#checklistIDs;

  getID = () => this.#ID;

  getProjectId = () => this.#pID;

  // Setter methods //
  setTitle = (newTitle) => {
    this.#title = newTitle;
  };

  setDescription = (newDescription) => {
    this.#description = newDescription;
  };

  setDue = (newDue) => {
    this.#due = newDue;
    return newDue;
  };

  setPriority = (newPriority) => {
    newPriority = Number(newPriority);
    console.log("Debugging, logging newPriority", newPriority);
    newPriority = typeof newPriority === "NaN" ? 0 : newPriority;
    newPriority = newPriority < 0 ? 0 : newPriority;
    newPriority = newPriority > 3 ? 3 : newPriority;
    this.#priority = newPriority;
    return newPriority;
  };

  setNotes = (newNotes) => {
    this.#notes = newNotes;
  };

  addChecklistItem = (newChecklistItem) => {
    this.#checklistIDs.push(newChecklistItem);
  };

  // Toggles and Deleters //
  removeChecklistItem = (id) => {
    console.log(`Removing checklist-item ${  id}`);
    const index = this.#checklistIDs.indexOf(id);
    this.#checklistIDs.splice(index, 1);
  };

  toggleStatus = () => {
    this.#status = !this.#status;
  };
};