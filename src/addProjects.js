import {
  projectTitleInput,
  projectForm,
  projectDescriptionInput,
  projectDueDateInput,
  projectPriorityInput,
} from "./addProjectsPage";
import { displayProject } from "./projectsNav";

let myProjects = [];

function Project(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

const project1 = new Project("Fix car");
const project2 = new Project("Learn web development");
const project3 = new Project("Work");

myProjects[0] = project1;
myProjects[1] = project2;
myProjects[2] = project3;

function addProject() {
  myProjects = [];
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
  displayProject();
  projectForm.reset();
  console.log(newProject);
}

export { addProject, myProjects };
