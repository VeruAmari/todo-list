import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';
import { Checklist } from './checklistObj.js';
import { UIProject } from './ui.js';


function testFunction(){
  const test1 = new Todo("Title Test 1", "Some testing object 1.", "Right now 1!", 1, "Does this work 1?", {"one": true, "two": false});

  const test2 = new Todo("Title Test 2", "Some testing object 2.", "Right now 2!", "a", "Does this work 2?", {"two": true, "three": false});

  const test3 = new Todo("Title Test 3", "Some testing object 3.", "Right now 3!", 3, "Does this work 3?", {"three": true, "four": false});

  const testProject = new Project("Test Project");

  testProject.addTodo(test1);
  testProject.addTodo(test2);
  testProject.addTodo(test3);

  //console.log(testProject);
  console.log("Calling getTodoList");
  console.log(testProject.getTodoList());
  //testProject.removeTodo(1);
  //console.log(testProject, testProject.getTodoList());
  const uiTest = new UIProject("Title 1");
  console.log(uiTest);
  const uiTest2 = new UIProject("Title 2");
  console.log(uiTest2);
}

testFunction();