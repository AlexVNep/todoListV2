import { addProject, myProjects } from "./addProjects";
// import { getProjectsContainer } from "./projectsListContainer";

// getProjectsContainer();

function showAllProjects() {
  const container = document.getElementById("content-container");
  const allProjectsDiv = document.createElement("div");
  allProjectsDiv.setAttribute("id", "all-projects-div");

  container.appendChild(allProjectsDiv);

  const allProjectsHeading = document.createElement("h2");
  allProjectsHeading.textContent = "All Projects";
  allProjectsDiv.appendChild(allProjectsHeading);

  myProjects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    allProjectsDiv.appendChild(projectCard);

    const projectCardTitle = document.createElement("h3");
    projectCardTitle.textContent = project.title;

    const projectCardDescription = document.createElement("p");
    projectCardDescription.textContent = project.description;

    const ProjectCardDueDate = document.createElement("p");
    ProjectCardDueDate.textContent = project.dueDate;

    const projectCardPriority = document.createElement("p");
    projectCardPriority.textContent = project.priority;

    const projectCardDeleteButton = document.createElement("button");
    projectCardDeleteButton.textContent = "DELETE";

    projectCard.appendChild(projectCardTitle);
    projectCard.appendChild(projectCardDescription);
    projectCard.appendChild(ProjectCardDueDate);
    projectCard.appendChild(projectCardPriority);
    projectCard.appendChild(projectCardDeleteButton);

    projectCardDeleteButton.addEventListener("click", () => {
      const projectListToDelete = document.getElementById(`Button${[index]}`);
      allProjectsDiv.removeChild(projectCard);
      if (projectListToDelete.parentNode) {
        projectListToDelete.parentNode.removeChild(projectListToDelete);
      }
      console.log(projectListToDelete.textContent);
    });
  });

  console.log(myProjects);

  return allProjectsDiv;
}

export { showAllProjects };
