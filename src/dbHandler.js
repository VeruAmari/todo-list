export default function database() {
  // Save and retrieve all data necessary to create an object in memory

  function newProject(id, title, todolistIDs, status) {
    const prjIDL = localStorage.projectIDlist
      ? JSON.parse(localStorage.projectIDlist)
      : [];
    if (!localStorage[`project-${  id}`]) {
      prjIDL.push(id);
      localStorage.setItem("projectIDlist", JSON.stringify(prjIDL));
      localStorage.setItem(
        `project-${  id}`,
        JSON.stringify({
          type: "project",
          id,
          title,
          todolistIDs,
          status,
        }),
      );
    }
  }

  function newTodo(
    id,
    title,
    description,
    due,
    priority,
    notes,
    projectID,
    checklistIDs,
    status,
  ) {
    if (!localStorage[`todo-${  id}`]) {
      localStorage.setItem(
        `todo-${  id}`,
        JSON.stringify({
          type: "todo",
          id,
          title,
          description,
          due,
          priority,
          notes,
          projectID,
          checklistIDs,
          status,
        }),
      );
    }
  }

  function newChecklistItem(id, title, todoID, status) {
    if (!localStorage[`checklistitem-${  id}`]) {
      localStorage.setItem(
        `checklistitem-${  id}`,
        JSON.stringify({
          type: "checklistitem",
          id,
          title,
          todoID,
          status,
        }),
      );
    }
  }

  function getData(type, id) {
    if (localStorage[`${type  }-${  id}`]) {
      return JSON.parse(localStorage[`${type  }-${  id}`]);
    }
    return false;
  }

  function modifyData(type, id, attribute, newdata) {
    const getdata = JSON.parse(localStorage.getItem(`${type  }-${  id}`));
    console.log(
      "Modiffying",
      attribute,
      "attribute from",
      type,
      "number",
      id,
      "\n",
      "Old value:",
      getdata[attribute],
    );
    if (attribute === "checklistIDs" || attribute === "todolistIDs") {
      if (!getdata[attribute].includes(newdata)) {
        getdata[attribute].push(newdata);
      }
    } else {
      getdata[attribute] = newdata;
    }

    localStorage.setItem(`${type  }-${  id}`, JSON.stringify(getdata));
    console.log("New value:", getdata[attribute]);
  }

  function removeData(type, id) {
    console.log("Deleting", type, "number", id, "\n");
    if (type === "project") {
      // Remove project ID from projects list
      const projs = JSON.parse(localStorage.projectIDlist);
      console.log("Previous project id list:", projs);
      const index = projs.indexOf(id);
      projs.splice(index, 1);
      localStorage.projectIDlist = JSON.stringify(projs);
      console.log("New project id list:", projs);
    } else if (type === "todo") {
      // Remove todo from project's todo list
      const {projectID} = getData(type, id);
      const projectData = getData("project", projectID);
      const index = projectData.todolistIDs.indexOf(id);
      projectData.todolistIDs.splice(index, 1);
      localStorage[`project-${  projectID}`] = JSON.stringify(projectData);
    } else if (type === "checklistitem") {
      //
      const {todoID} = getData(type, id);
      const todoData = getData("todo", todoID);
      const index = todoData.checklistIDs.indexOf(id);
      todoData.checklistIDs.splice(index, 1);
      localStorage[`todo-${  todoID}`] = JSON.stringify(todoData);
    }

    localStorage.removeItem(`${type  }-${  id}`);
  }

  function getProjects() {
    return localStorage.projectIDlist
      ? JSON.parse(localStorage.projectIDlist)
      : [];
  }

  return {
    newProject,
    newTodo,
    newChecklistItem,
    getData,
    modifyData,
    getProjects,
    removeData,
  };
};