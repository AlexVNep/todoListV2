const myProjects = [];

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
  myProjects.forEach((project) => {
    console.log(project.title);
  });
}

export default addProject();
