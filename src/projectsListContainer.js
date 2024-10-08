import { myProjects, addProject } from "./addProjects";

addProject();

function getProjectsContainer() {
  const projectsListContainer = document.createElement("div");
  projectsListContainer.setAttribute("id", "projects-nav");

  const projectHeading = document.createElement("h2");
  projectHeading.textContent = "Projects";

  projectsListContainer.appendChild(projectHeading);

  const projectListCard = document.createElement("div");
  projectListCard.classList.add("project-list-card");
  projectsListContainer.appendChild(projectListCard);

  const projectUL = document.createElement("ul");
  projectListCard.appendChild(projectUL);

  myProjects.forEach((project, index) => {
    const projectList = document.createElement("li");
    projectUL.appendChild(projectList);
    projectList.textContent = project.title;
    projectList.setAttribute("id", `Button${[index]}`);
    console.log(project.description);
    projectList.addEventListener("click", () => {
      const container = document.getElementById("content-container");
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

      const addProjectToDoButton = document.createElement("button");
      addProjectToDoButton.textContent = "Add Tasks";

      const taskDiv = document.createElement("div");
      const taskItems = project.tasks();

      addProjectToDoButton.addEventListener("click", () => {
        const taskCard = document.createElement("div");
        const taskInput = document.createElement("input");
        taskInput.setAttribute("id", "task-input");

        const taskButton = document.createElement("button");
        taskButton.setAttribute("id", "add-task-btn");
        taskButton.textContent = "Add Task";
        container.appendChild(taskCard);
        taskCard.appendChild(taskInput);
        taskCard.appendChild(taskButton);
        taskButton.addEventListener("click", (event) => {
          event.preventDefault();
          const newTask = document.getElementById("task-p");
          const taskTodoTitle = taskInput.value;
          newTask.textContent = taskTodoTitle;

          // newTask.appendChild(taskTodoTitle);

          container.removeChild(taskCard);
          clickedProjectCard.appendChild(newTask);
        });
      });

      container.appendChild(clickedProjectCard);
      clickedProjectCard.appendChild(projectTitle);
      clickedProjectCard.appendChild(projectDescrip);
      clickedProjectCard.appendChild(projectDueDate);
      clickedProjectCard.appendChild(projectPriority);
      clickedProjectCard.appendChild(addProjectToDoButton);

      taskItems.forEach((item) => {
        const taskP = document.createElement("p");
        taskP.setAttribute("id", "task-p");
        taskP.textContent = item;
        console.log(taskP);
        taskDiv.appendChild(taskP);
        clickedProjectCard.appendChild(taskDiv);
      });
    });
  });
  return projectsListContainer;
}

export { getProjectsContainer };
