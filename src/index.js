import "./style.css";
import { fetchExistingData, initialRender } from "./mediator";

/* if (localStorage){
  console.log(localStorage);
}; */
fetchExistingData();

// testFunction() // Re-import from mediator to use;
// console.log(localStorage)
initialRender();
