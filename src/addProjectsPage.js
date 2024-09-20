import { myProjects, Project } from "./addProjects";
import { getProjectsContainer } from "./projectsListContainer";

function getAddProjectPage() {
  const addProjectPage = document.createElement("div");

  const addProjectPageHeading = document.createElement("h2");
  addProjectPageHeading.textContent = "Add A Project.";
  addProjectPage.appendChild(addProjectPageHeading);

  const projectForm = document.createElement("form");
  addProjectPage.appendChild(projectForm);

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.textContent = "Title: ";
  projectTitleLabel.setAttribute("for", "todo-title");

  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("id", "todo-title");
  projectTitleInput.setAttribute("type", "text");

  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.textContent = "Description: ";
  projectDescriptionLabel.setAttribute("for", "todo-description");

  const projectDescriptionInput = document.createElement("input");
  projectDescriptionInput.setAttribute("id", "todo-description");
  projectDescriptionInput.setAttribute("type", "text");

  const projectDueDateLabel = document.createElement("label");
  projectDueDateLabel.textContent = "Due Date: ";
  projectDueDateLabel.setAttribute("for", "todo-duedate");

  const projectDueDateInput = document.createElement("input");
  projectDueDateInput.setAttribute("id", "todo-duedate");
  projectDueDateInput.setAttribute("type", "date");

  const projectPriorityLabel = document.createElement("label");
  projectPriorityLabel.textContent = "Priority: ";
  projectPriorityLabel.setAttribute("for", "todo-priority");

  const projectPriorityInput = document.createElement("select");
  projectPriorityInput.setAttribute("id", "todo-priority");
  projectPriorityInput.setAttribute("name", "priority");

  const optionLow = document.createElement("option");
  optionLow.textContent = "Low";
  optionLow.setAttribute("value", "Low");
  const optionMed = document.createElement("option");
  optionMed.textContent = "Medium";
  optionMed.setAttribute("value", "Medium");
  const optionHigh = document.createElement("option");
  optionHigh.textContent = "High";
  optionHigh.setAttribute("value", "High");

  const addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.textContent = "+";
  addNewProjectBtn.setAttribute("type", "submit");

  addNewProjectBtn.addEventListener("click", (event) => {
    const container = document.getElementById("content-container");
    console.log("Add NEW PROJECT to project list works");
    event.preventDefault();

    const projectTitle = projectTitleInput.value;
    const projectDescription = projectDescriptionInput.value;
    const projectDueDate = projectDueDateInput.value;
    const projectPriority = projectPriorityInput.value;
    const newProject = new Project(
      projectTitle,
      projectDescription,
      projectDueDate,
      projectPriority
    );
    myProjects.push(newProject);
    localStorage.setItem("getProject", JSON.stringify(myProjects));
    projectForm.reset();
    console.log(newProject);

    container.replaceChildren();
    container.appendChild(getProjectsContainer());
    const projCont = document.getElementById("projects-container");
    projCont.replaceChildren();
    projCont.appendChild(getProjectsContainer());
  });

  projectForm.appendChild(projectTitleLabel);
  projectForm.appendChild(projectTitleInput);
  projectForm.appendChild(projectDescriptionLabel);
  projectForm.appendChild(projectDescriptionInput);
  projectForm.appendChild(projectDueDateLabel);
  projectForm.appendChild(projectDueDateInput);
  projectForm.appendChild(projectPriorityLabel);
  projectForm.appendChild(projectPriorityInput);
  projectPriorityInput.appendChild(optionLow);
  projectPriorityInput.appendChild(optionMed);
  projectPriorityInput.appendChild(optionHigh);

  projectForm.appendChild(addNewProjectBtn);
  return addProjectPage;
}

export { getAddProjectPage };
