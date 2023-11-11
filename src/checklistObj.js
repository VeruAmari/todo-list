export class ChecklistItem {

    #ID
    #pID;
    #title;
    #status;

    constructor(title, todoID, id, status) {

        if (id) {
            this.#ID = id;
            ChecklistItem.id = id;}
        else {
            this.#ID = ChecklistItem.id;
        };
        ChecklistItem.id++;
    
        this.#pID = todoID;
        this.#title = title ? title : " ";
        this.#status = status ? status : false;
    }
    static id = 0;


    // Getter methods //
    getTitle = () => { return this.#title };

    getStatus = () => { return this.#status };

    getID = () => { return this.#ID };

    getTodoID = () => { return this.#pID };


    // Setter methods //
    setTitle = (newTitle) => { this.#title = newTitle };

    toggleStatus = () => { this.#status = this.#status ? false : true; };
};