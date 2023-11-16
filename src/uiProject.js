/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import UIBasics from "./uiBasics";

// Class that creates a Project card container and all it's inner elements
export default class UIProject extends UIBasics {
  #todosContainer;

  #container;

  constructor(id, title, status) {
    console.log(`Starting UIProject #${  id  } creation.`);
    super(id, status);

    // Public attributes
    this._type = "project";
    this._title = this._makeTitle(this._type, title);
    this._divID = `${this._type  }-${  this._ID}`;
    this._status = this._makeStatus(this._type, this._statusBool);
    this._titleContainer = this._makeTitleContainer(
      this._type,
      this._title,
      this._status,
    );

    // Private attributes
    this.#todosContainer = this.#makeTodosContainer();
    this.#container = this._makeContainer(
      this._divID,
      this._type,
      this._titleContainer,
      this.#todosContainer,
    );

    // Finishing up
    this.#finishUp();
    console.log(`UIProject #${  id  } creation successful.`);
  };

  /* Initial setup private methods */
  // ##############################################################//

  #makeTodosContainer() {
    this.#todosContainer = document.createElement("div");
    this.#todosContainer.classList.add("todos", "container");

    return this.#todosContainer;
  };

  #finishUp() {
    const parent = document.querySelector(".body.inner-container");
    parent.appendChild(this.#container);
  }
  // ##############################################################//

  appendTodo(element) {
    this.#todosContainer.appendChild(element);
  }

  getProjectNode = () => this.#container;
}
