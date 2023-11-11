import './style.css';
import { testFunction, newTodo, newProject, fetchExistingData, initialRender } from './mediator.js';

/*if (localStorage){
  console.log(localStorage);
};*/
fetchExistingData();

//testFunction();
// console.log(localStorage)
initialRender();