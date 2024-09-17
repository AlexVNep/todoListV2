import { projectTitleInput, projectForm } from "./addProjectsPage";
import { displayProject } from "./projectsNav";

let myProjects = [];

function Project(title) {
  this.title = title;
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
  const newProject = new Project(projectTitle);
  myProjects.push(newProject);
  displayProject();
  projectForm.reset();
}

export { addProject, myProjects };
