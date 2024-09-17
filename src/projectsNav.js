import { myProjects } from "./addProjects";
import { container } from "./homePage";

const addProjectToDoButton = document.createElement("button");

const projectsContainer = document.createElement("div");
projectsContainer.classList.add("projects-nav");

const projectHeading = document.createElement("h2");
projectHeading.textContent = "Projects";

projectsContainer.appendChild(projectHeading);

const projectListCard = document.createElement("div");
projectListCard.classList.add("project-list-card");
projectsContainer.appendChild(projectListCard);

const projectUL = document.createElement("ul");
projectListCard.appendChild(projectUL);

function displayProject() {
  myProjects.forEach((project, index) => {
    const projectList = document.createElement("li");
    projectUL.appendChild(projectList);
    projectList.textContent = project.title;
    projectList.setAttribute("id", `Button${[index]}`);
    console.log(project.description);
    projectList.addEventListener("click", () => {
      container.replaceChildren();
      const clickedProjectCard = document.createElement("div");
      const projectTitle = document.createElement("h2");
      projectTitle.textContent = project.title;

      const projectDescrip = document.createElement("p");
      projectDescrip.textContent = project.description;

      const projectDueDate = document.createElement("p");
      projectDueDate.textContent = project.dueDate;

      const projectPriority = document.createElement("p");
      projectPriority.textContent = project.priority;

      addProjectToDoButton.textContent = "Add Tasks";

      addProjectToDoButton.addEventListener("click", () => {
        const taskCard = document.createElement("div");
        const taskInput = document.createElement("input");
        const taskButton = document.createElement("button");
        taskButton.textContent = "Add Task";
        container.appendChild(taskCard);
        taskCard.appendChild(taskInput);
        taskCard.appendChild(taskButton);

        taskButton.addEventListener("click", () => {
          const taskDiv = document.createElement("div");
          taskDiv.textContent = taskInput.value;

          container.appendChild(taskDiv);
          container.removeChild(taskCard);
        });
      });

      container.appendChild(clickedProjectCard);
      clickedProjectCard.appendChild(projectTitle);
      clickedProjectCard.appendChild(projectDescrip);
      clickedProjectCard.appendChild(projectDueDate);
      clickedProjectCard.appendChild(projectPriority);
      clickedProjectCard.appendChild(addProjectToDoButton);
    });
  });
}

export { projectsContainer, displayProject };
