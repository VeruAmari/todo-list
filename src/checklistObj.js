export class ChecklistItem {
    #title;
    #status;
    constructor(title) {
        this.#title = title;
        this.#status = false;
    }

    // Title methods //
    getTitle = () => { this.#title };
    setTitle = (newTitle) => { this.#title = newTitle };


    // Status methods //
    getStatus = () => { this.#status };
    toggleStatus = () => { this.#status = this.#status ? false : true; };
};