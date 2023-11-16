/* eslint-disable no-underscore-dangle */
export default class UIBasics {
  constructor(id, statusBool) {
    this._ID = id;
    this._del = this._makeDelete();
    this._statusBool = statusBool;
  }

  updateTitle(newTitle) {
    this._title.textContent = newTitle;
  }

  toggleStatus() {
    this._statusBool = !this._statusBool;
    this._status.textContent = this._statusBool ? "✔️" : "⭕";

    this._status.classList.toggle("complete");
    this._status.classList.toggle("in-progress");
  }

  // Makers //
  // ###############################################//
  _makeTitle(type, text) {
    this._title = document.createElement("span");
    this._title.classList.add(type, "title");
    this._title.textContent = text;
    return this._title;
  }

  _makeDelete() {
    this._del = document.createElement("button");
    this._del.classList.add("delete");
    this._del.textContent = "x";
    return this._del;
  }

  _makeStatus(type, statusBool) {
    this._status = document.createElement("button");
    this._status.classList.add(type, "status-btn");

    if (!statusBool) {
      this._status.classList.add("in-progress");
      this._status.textContent = "⭕";
    } else {
      this._status.classList.add("complete");
      this._status.textContent = "✔️";
    }

    return this._status;
  }

  _makeTitleContainer(type, title, status) {
    this._titleContainer = document.createElement("div");
    this._titleContainer.classList.add(type, "title", "container");
    this._titleContainer.appendChild(this._del);
    this._titleContainer.appendChild(title);
    this._titleContainer.appendChild(status);

    return this._titleContainer;
  }

  _makeContainer(id, type, ...elements) {
    this._container = document.createElement("div");
    this._container.id = id;
    this._container.classList.add(`${type  }-container`);
    elements.forEach((element) => {
      this._container.appendChild(element);
    });

    return this._container;
  }

  // Getters
  getdID = () => this._divID;

  getStatus = () => this._status;

  getTitle = () => this._title;

  getDel = () => this._del;
}
