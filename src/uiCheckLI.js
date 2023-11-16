/* eslint no-console: "off", no-underscore-dangle: "off" */
import UIBasics from "./uiBasics";

export default class UIChecklistItem extends UIBasics {
  #container;

  constructor(id, title, status) {
    super(id, status);
    // Public attributes //
    this._type = "checklist-item";
    this._divID = `${this._type  }-${  this._ID}`;
    this._title = this._makeTitle("checklist-item", title);
    this._status = this._makeStatus("checklist-item", this._statusBool);
    this._titleContainer = this._makeTitleContainer(
      this._type,
      this._title,
      this._status,
    );

    // Private attributes //
    this.#container = this._makeContainer(
      this._divID,
      this._type,
      this._titleContainer,
    );
  }

  getChecklistItem = () => this.#container;
}
