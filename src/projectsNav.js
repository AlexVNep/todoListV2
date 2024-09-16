import { myProjects } from "./addProjects";

const projectsContainer = document.createElement("div");
projectsContainer.classList.add("projects-nav");

const projectHeading = document.createElement("h3");
projectHeading.textContent = "Projects";

projectsContainer.appendChild(projectHeading);

const projectListCard = document.createElement("div");
projectListCard.classList.add("project-list-card");
projectsContainer.appendChild(projectListCard);

const projectUL = document.createElement("ul");
projectListCard.appendChild(projectUL);

function displayProject() {
  myProjects.forEach((project) => {
    const projectList = document.createElement("li");
    projectUL.appendChild(projectList);
    projectList.textContent = project.title;
    console.log(project.title);
  });
}

export { projectsContainer, displayProject };
