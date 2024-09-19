import "./styles.css";
import { getHomePage } from "./homePage";
import { getAddPage } from "./addPage";
import { getToDoListContainer } from "./toDoList";
import { getAddProjectPage } from "./addProjectsPage";

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
  console.log("Add PROJECT PAGE button works");
  container.replaceChildren();
  container.appendChild(getAddProjectPage());
});

const seeProjectsBtn = document.getElementById("see-projects-btn");
seeProjectsBtn.addEventListener("click", () => {
  console.log("See ALL PROJECT CARDS button");
});
