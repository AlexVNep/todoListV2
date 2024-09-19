let myProjects = [];

class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function addProject() {
  const project1 = new Project(
    "Fix car",
    "Buy parts for car",
    "07/22/2025",
    "Low"
  );
  const project2 = new Project(
    "Learn web development",
    "Learn Javascript",
    "07/22/2025",
    "High"
  );
  const project3 = new Project(
    "Work",
    "Learn React and other stuff",
    "12/25/2024",
    "High"
  );

  myProjects[0] = project1;
  myProjects[1] = project2;
  myProjects[2] = project3;
}

export { addProject, myProjects, Project };
