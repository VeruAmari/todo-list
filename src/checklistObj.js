export default class ChecklistItem {
  #ID;

  #pID;

  #title;

  #status;

  constructor(title, todoID, id, status) {
    if (id || id === 0) {
      this.#ID = id;
      ChecklistItem.id = id;
    } else {
      this.#ID = ChecklistItem.id;
    }
    ChecklistItem.id += 1;

    this.#pID = todoID;
    this.#title = title || " ";
    this.#status = status || false;
  }

  static id = 0;

  // Getter methods //
  getTitle = () => this.#title;

  getStatus = () => this.#status;

  getID = () => this.#ID;

  getTodoID = () => this.#pID;

  // Setter methods //
  setTitle = (newTitle) => {
    this.#title = newTitle;
  };

  toggleStatus = () => {
    this.#status = !this.#status;
  };
};