// Class that contains shared getter and setter methods to be inherited:
export default function formCreator() {
  function formContainer(type) {
    const form = document.createElement("form");
    form.classList.add(`${type}-container`, "form");
    form.setAttribute("action", "#");
    return form;
  }

  function addFormElement(type, element, container, inp) {
    let inputType = inp;
    inputType = inputType || "text";
    const title = document.createElement("div");
    title.classList.add(type, element, "container", "form");
    container.appendChild(title);

    // Make title input
    let input;
    if (element === "description" || element === "notes") {
      input = document.createElement("textarea");
    } else if (element === "priority") {
      input = document.createElement("select");
      const values = ["Trivial", "Low", "Medium", "High"];
      values.forEach((value) => {
        const option = document.createElement("option");
        option.textContent = value;
        option.setAttribute("value", values.indexOf(value));
        input.appendChild(option);
      });
      // input.append
    } else {
      input = document.createElement("input");
    }
    input.setAttribute("type", inputType);
    input.setAttribute("placeholder", `New ${type} ${element}`);
    input.setAttribute("name", element);
    if (inputType === "number") {
      input.setAttribute("min", 0);
      input.setAttribute("max", 3);
    }
    input.classList.add(type, element, "form");
    title.appendChild(input);
  }

  function addSubmitButton(container) {
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.classList.add("submit", "btn");
    submit.textContent = "Add";
    container.appendChild(submit);
  }

  function projectForm() {
    // Make project div
    const type = "project";
    const container = formContainer(type);

    // Make Title input field container
    addFormElement(type, "title", container);

    addSubmitButton(container);

    // Append to document
    document.querySelector(".body.inner-container").appendChild(container);
    return container;
  }

  function todoForm() {
    // Make todo form container
    const container = formContainer("todo");
    const type = "todo";

    // Make Title container
    addFormElement(type, "title", container);
    addFormElement(type, "description", container);
    addFormElement(type, "due", container, "date");
    addFormElement(type, "priority", container, "number");
    addFormElement(type, "notes", container);

    // Make Description input
    // Make Due Date input
    // Make Priority input
    // Make Notes input
    // Make submit button
    addSubmitButton(container);

    // Append to project
    return container;
  }

  function checklistItemForm() {
    const type = "checklist-item";
    const container = formContainer(type);

    addFormElement(type, "title", container);
    addSubmitButton(container);

    return container;
  }

  function editTodoItem(paren, type, element) {
    const parent = paren;
    const container  = document.createElement("form");
    container.classList.add(`${type}-container`, "form");
    container.setAttribute("action", "#");
    
    addFormElement(type, element, container); 

    parent.appendChild(container);
  }

  return { projectForm, todoForm, checklistItemForm, editTodoItem };
}
