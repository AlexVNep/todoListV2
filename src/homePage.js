import { getHeaderNavBar } from "./headerNavBar";
import { getToDoListContainer } from "./toDoList";
import { getProjectsContainer } from "./projectsListContainer";

function getHomePage() {
  // Get Header
  const header = document.querySelector("#header");
  const heading = document.createElement("h1");
  heading.textContent = "My To-Do App";
  header.appendChild(heading);

  header.appendChild(getHeaderNavBar());

  //Get Projects Container
  const projectsContainer = document.querySelector("#projects-container");
  projectsContainer.appendChild(getProjectsContainer());

  //Get Content Container
  const contentContainer = document.querySelector("#content-container");
  contentContainer.appendChild(getToDoListContainer());

  //Footer copyright year
  const copyRightText = document.querySelector("#date");
  const year = new Date().getFullYear();
  copyRightText.textContent = `Copyright © Alex Nepomuceno ${year}`;
}
export { getHomePage };
