let myProjects = [];

function setMyGetProject(value) {
  myProjects = value;
}

class Project {
  constructor(title, description, dueDate, priority, task = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.task = [task];
    this.tasks = function () {
      return this.task;
    };
  }
}

function addProject() {
  const project1 = new Project(
    "Fix car",
    "Buy parts for car",
    "07/22/2025",
    "Low",
    "Idler arm"
  );
  const project2 = new Project(
    "Learn web development",
    "Learn Javascript",
    "07/22/2025",
    "High",
    "Javascript exercises"
  );
  const project3 = new Project(
    "Work",
    "Learn React and other stuff",
    "12/25/2024",
    "High",
    "Read up on it"
  );

  myProjects[0] = project1;
  myProjects[1] = project2;
  myProjects[2] = project3;
}

export { addProject, myProjects, Project, setMyGetProject };
