export function database (){
    // Save and retrieve all data necessary to create an object in memory

    function newProject (id, title, todolistIDs, status) {
        let prjIDL = localStorage["projectIDlist"] ? JSON.parse(localStorage["projectIDlist"]) : [];
        if (!localStorage["project-" + id]){
            prjIDL.push(id);
            localStorage.setItem("projectIDlist", JSON.stringify(prjIDL));
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
        console.log("Modiffying", attribute, "attribute from", type, "number", id, "\n", "Old value:", getdata[attribute]);
        if (attribute === "checklistIDs" || attribute === "todolistIDs") {
            if (!getdata[attribute].includes(newdata)){
                getdata[attribute].push(newdata);
            }
        } else {
            getdata[attribute] = newdata;
        };
    
        localStorage.setItem(type + "-" + id, JSON.stringify(getdata));
        console.log("New value:", getdata[attribute]);
    };

    function getProjects(){ return localStorage["projectIDlist"] ? JSON.parse(localStorage["projectIDlist"]) : [] };

    return { newProject, newTodo, newChecklistItem, getData, modifyData, getProjects };
};