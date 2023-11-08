export class ChecklistItem {

    #ID
    #pID;
    #title;
    #status;

    constructor(title, parentID) {
        this.#ID = ChecklistItem.id;
        ChecklistItem.id++;
        this.#pID = parentID;
        this.#title = title;
        this.#status = false;
    }
    static id = 0;


    // Getter methods //
    getTitle = () => { this.#title };

    getStatus = () => { this.#status };

    getID = () => { this.#ID };

    getParentID = () => { this.#pID };


    // Setter methods //
    setTitle = (newTitle) => { this.#title = newTitle };

    toggleStatus = () => { this.#status = this.#status ? false : true; };
};