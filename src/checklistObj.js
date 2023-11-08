export class ChecklistItem {

    #ID
    #pID;
    #title;
    #status;

    constructor(title, todoID, id) {

        if (id) { this.#ID = id }
        else {
            this.#ID = ChecklistItem.id;
            ChecklistItem.id++;
        };
    
        this.#pID = todoID;
        this.#title = title;
        this.#status = false;
    }
    static id = 0;


    // Getter methods //
    getTitle = () => { this.#title };

    getStatus = () => { this.#status };

    getID = () => { this.#ID };

    getTodoID = () => { this.#pID };


    // Setter methods //
    setTitle = (newTitle) => { this.#title = newTitle };

    toggleStatus = () => { this.#status = this.#status ? false : true; };
};