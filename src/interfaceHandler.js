import { Project } from './projectObj.js';
import { Todo } from './todoObj.js';


function testFunction(){
  const test1 = new Todo("Title Test 1", "Some testing object 1.", "Right now 1!", 1, "Does this work 1?", {"one": true, "two": false});

  const test2 = new Todo("Title Test 2", "Some testing object 2.", "Right now 2!", "a", "Does this work 2?", {"two": true, "three": false});

  const test3 = new Todo("Title Test 3", "Some testing object 3.", "Right now 3!", 3, "Does this work 3?", {"three": true, "four": false});

  const testProject = new Project("Test Project");

  console.log(testProject.addTodoList(test1));
  console.log(testProject.addTodoList(test2));
  console.log(testProject.addTodoList(test3));

  //console.log(testProject);

  console.log(testProject.getTodoList());
  //testProject.removeTodo(1);
  //console.log(testProject, testProject.getTodoList());
}

testFunction();