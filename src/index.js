import "./styles.css";
import { header } from "./homePage";
import { addButton } from "./navBar";
import { getAddPage } from "./addPage";
import { displayToDo } from "./toDoList";
import { container } from "./homePage";
import { addNewTodoBtn } from "./addPage";
import { getToDoListContainer } from "./toDoList";
import { addToDo } from "./addToDo";
import { addNewProjectBtn, getAddProjectPage } from "./addProjectsPage";
import { projectsButton } from "./navBar";
import { displayProject } from "./projectsNav";
import { addProject } from "./addProjects";
import projectsContainer from "./projectsNav";

addButton.addEventListener("click", () => {
  container.replaceChildren();
  container.appendChild(getAddPage());
});

addNewTodoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  container.replaceChildren();
  addToDo();
  container.appendChild(getToDoListContainer());
});

projectsButton.addEventListener("click", () => {
  container.replaceChildren();

  container.appendChild(getAddProjectPage());
});

addNewProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  container.replaceChildren();
  addProject();
  container.appendChild(getToDoListContainer());
});

displayToDo();
displayProject();

// NEXT STEP
// Add ul and li to append to each title
// Add description to Projects constructor
// Append description value to addProject func
