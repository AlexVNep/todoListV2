import "./styles.css";
import { getHomePage } from "./homePage";
import { getAddPage } from "./addPage";
import { getToDoListContainer } from "./toDoList";
import { getAddProjectPage } from "./addProjectsPage";

// import { addButton, homeButton, projectsButton } from "./headerNavBar";
// import { getAddPage, addNewTodoBtn } from "./addPage";
// import { displayToDo, getToDoListContainer } from "./toDoList";
// import { addToDo } from "./addToDo";
// import { addNewProjectBtn, getAddProjectPage } from "./addProjectsPage";
// import { displayProject, projectsContainer } from "./projectsNav";
// import { addProject } from "./addProjects";

getHomePage();

const container = document.getElementById("content-container");

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  console.log("Home button works");
  container.replaceChildren();
  container.appendChild(getToDoListContainer());
});

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
  console.log("Add button works");
  container.replaceChildren();
  container.appendChild(getAddPage());
});

const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
  container.replaceChildren();
  container.appendChild(getAddProjectPage());
});

// addNewProjectBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   container.replaceChildren();
//   addProject();
//   container.appendChild(getToDoListContainer());
// });

// displayToDo();
// displayProject();

// NEXT STEP
// Add ul and li to append to each title
// Add description to Projects constructor
// Append description value to addProject func
