export function database (){
    // Save and retrieve all data necessary to create an object in memory

    function newProject (id, title, todolistIDs, status) {
        
        if (!localStorage["project-" + id])
        localStorage["project-" + id] = {
            "type": "project",
            "id": id,
            "title": title,
            "todolistIDs": todolistIDs,
            "status": status,
        };
    };

    function newTodo (id, title, description, due, priority, notes, projectID, checklistIDs, statusBool) {

        if (!localStorage["todo-" + id]){
            localStorage["todo-" + id] =
            {
                "type": "todo",
                "id": id,
                "title": title,
                "description": description,
                "due": due,
                "priority": priority,
                "notes": notes,
                "projectID": projectID,
                "checklistIDs": checklistIDs,
                "status": statusBool,
            };
        };
    };    

    function newChecklistItem (id, title, todoID, status){

        if (!localStorage["checklistitem-" + id]) {
            localStorage["checklistitem-" + id] =
            {
                "type": "checklistitem",
                "id": id,
                "title": title,
                "todoID": todoID,
                "status": status,
            };
        };
    };

    function getData (type, id){
        return localStorage[type + "-" + id];
    };

    function modifyData (type, id, attribute, newdata) {
        localStorage[type + "-" + id][attribute] = newdata;
    };

    return { newProject, newTodo, newChecklistItem, getData, modifyData };
};