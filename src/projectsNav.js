const projectsContainer = document.createElement("nav");
projectsContainer.classList.add("projects-nav");

const projectHeading = document.createElement("h3");
projectHeading.textContent = "Projects";

projectsContainer.appendChild(projectHeading);

export { projectsContainer };
