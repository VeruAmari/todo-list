import './style.css';
import { testFunction, newTodo, newProject, fetchExistingData, initialRender } from './mediator.js';

/*if (localStorage){
  console.log(localStorage);
};*/
fetchExistingData();
// localStorage.clear();
// testFunction();
// console.log(localStorage)