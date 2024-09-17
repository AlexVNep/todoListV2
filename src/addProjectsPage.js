const addProjectPage = document.createElement("div");

const addProjectPageHeading = document.createElement("h2");
addProjectPageHeading.textContent = "Add A Project.";
addProjectPage.appendChild(addProjectPageHeading);

const projectForm = document.createElement("form");
addProjectPage.appendChild(projectForm);

const projectTitleLabel = document.createElement("label");
projectTitleLabel.textContent = "Project Title: ";
projectTitleLabel.setAttribute("for", "todo-title");

const projectTitleInput = document.createElement("input");
projectTitleInput.setAttribute("id", "todo-title");
projectTitleInput.setAttribute("type", "text");

const addNewProjectBtn = document.createElement("button");
addNewProjectBtn.textContent = "+";
addNewProjectBtn.setAttribute("type", "submit");

projectForm.appendChild(projectTitleLabel);
projectForm.appendChild(projectTitleInput);
projectForm.appendChild(addNewProjectBtn);

function getAddProjectPage() {
  return addProjectPage;
}

export { getAddProjectPage, addNewProjectBtn, projectTitleInput, projectForm };
