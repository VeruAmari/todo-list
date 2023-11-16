/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import UIBasics from "./uiBasics";

// Class that creates a Todo card container and all it's inner elements.
export default class UITodo extends UIBasics {
  #titleContainer;

  #description;

  #due;

  #priority;

  #notes;

  #checklist;

  #container;

  constructor(id, title, description, due, priority, notes, status) {
    console.log(`Starting UITodo #${  id  } creation.`);
    super(id, status);
    // Public attributes
    this._type = "todo";
    this._divID = `${this._type  }-${  this._ID}`;
    this._title = this._makeTitle(this._type, title);
    this._status = this._makeStatus(this._type, this._statusBool);

    // Private attributes
    this.#titleContainer = this._makeTitleContainer(
      this._type,
      this._title,
      this._status,
    );
    this.#makeDescription(description);
    this.#makeDue(due);
    this.#makePriority(priority);
    this.#makeNotes(notes);
    this.#makeChecklistContainer();
    this._makeContainer(
      this._divID,
      this._type,
      this.#titleContainer,
      this.#description,
      this.#due,
      this.#priority,
      this.#notes,
      this.#checklist,
    );

    console.log(`UITodo #${  id  } creation successful.`);
  }

  // Initial setup private methods //
  // #########################################################//

  #makeDescription(text) {
    this.#description = document.createElement("div");
    this.#description.classList.add("todo", "description");
    this.#description.textContent = text;
  }

  #makeDue(text) {
    this.#due = document.createElement("div");
    this.#due.classList.add("todo", "due");
    this.#due.textContent = text;
  }

  #makePriority(text) {
    this.#priority = document.createElement("div");
    this.#priority.classList.add("todo", "priority");

    const check = Number(text);
    let replace;
    switch (check) {
      case 1:
        replace = "Low";
        break;
      case 2:
        replace = "Medium";
        break;
      case 3:
        replace = "High";
        break;
      default:
        replace = "Trivial";
    };

    this.#priority.textContent = replace;
  }

  #makeNotes(text) {
    this.#notes = document.createElement("div");
    this.#notes.classList.add("todo", "notes");
    this.#notes.textContent = text;
  }

  #makeChecklistContainer() {
    this.#checklist = document.createElement("div");
    this.#checklist.classList.add("todo", "checklist");
  }

  // #########################################################//

  // Start of own methds //

  appendChecklist(element) {
    this.#checklist.appendChild(element);
  }

  updateDescription(text) {
    this.#description.textContent = text;
  }

  updateDue(text) {
    this.#due.textContent = text;
  }

  updateNotes(text) {
    this.#notes.textContent = text;
  }

  updatePriority(text) {
    const check = Number(text);
    let replace;
    switch (check) {
      case 1:
        replace = "Low";
        break;
      case 2:
        replace = "Medium";
        break;
      case 3:
        replace = "High";
        break;
      default:
        replace = "Trivial";
    };

    this.#priority.textContent = replace;
  }

  getTodo = () => this._container;

  getDescription = () => this.#description;

  getDue = () => this.#due;

  getNotes = () => this.#notes;

  getPriority = () => this.#priority;
}
