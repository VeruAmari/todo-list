export function database (){
    // Save and retrieve all data necessary to create an object in memory

    function newProject (id, title, todolistIDs, status) {
        let prjC = localStorage["projectcount"] ? JSON.parse(localStorage["projectcount"]) : 0;

        if (!localStorage["project-" + id]){
            prjC++;
            localStorage.setItem("projectcount", prjC);
            localStorage.setItem("project-" + id, JSON.stringify(
                {
                    "type": "project",
                    "id": id,
                    "title": title,
                    "todolistIDs": todolistIDs,
                    "status": status,
                }
            ))
        };
    };

    function newTodo (id, title, description, due, priority, notes, projectID, checklistIDs, status) {

        if (!localStorage["todo-" + id]){

            localStorage.setItem("todo-" + id, JSON.stringify(
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
                    "status": status,
                }
            ))
        };
    };

    function newChecklistItem (id, title, todoID, status){

        if (!localStorage["checklistitem-" + id]) {
            localStorage.setItem("checklistitem-" + id, JSON.stringify(
                {
                    "type": "checklistitem",
                    "id": id,
                    "title": title,
                    "todoID": todoID,
                    "status": status,
                }
            ))
        };
    };

    function getData (type, id){
        if (localStorage[type + "-" + id]){
            return JSON.parse(localStorage[type + "-" + id]);
        };
    };

    function modifyData (type, id, attribute, newdata) {
        const getdata = JSON.parse(localStorage.getItem(type + "-" + id));
        
        if (attribute === "checklistIDs" || attribute === "todolistIDs") {
            getdata[attribute].push(newdata);
        } else {
            localStorage[type + "-" + id][attribute] = newdata;
        };
        localStorage.setItem(type + "-" + id, JSON.stringify(getdata));
        
    };

    function getProjectCount(){ return JSON.parse(localStorage["projectcount"])};

    return { newProject, newTodo, newChecklistItem, getData, modifyData, getProjectCount };
};