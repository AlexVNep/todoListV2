import { getHeaderNavBar } from "./headerNavBar";
import { getToDoListContainer } from "./toDoList";

function getHomePage() {
  // Get Header
  const header = document.querySelector("#header");
  const heading = document.createElement("h1");
  heading.textContent = "My To-Do App";
  header.appendChild(heading);

  //   const navContainer2 = document.getElementById("#nav-container");
  header.appendChild(getHeaderNavBar());

  //Get Projects Container
  const projectsContainer = document.querySelector("#projects-container");
  const projectsContainerHeading = document.createElement("h2");
  projectsContainerHeading.textContent = "Projects";
  projectsContainer.appendChild(projectsContainerHeading);

  //Get Content Container
  const contentContainer = document.querySelector("#content-container");
  contentContainer.appendChild(getToDoListContainer());

  //Footer copyright year
  const copyRightText = document.querySelector("#date");
  const year = new Date().getFullYear();
  copyRightText.textContent = `Copyright © Alex Nepomuceno ${year}`;
}
export { getHomePage };
