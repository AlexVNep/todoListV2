const navContainer = document.createElement("nav");

const addButton = document.createElement("button");
addButton.textContent = "Add To-Do";

const projectsButton = document.createElement("button");
projectsButton.textContent = " Add Projects";

const homeButton = document.createElement("button");
homeButton.textContent = "Home";

const anytimeButton = document.createElement("button");
anytimeButton.textContent = "Anytime";

const somedayButton = document.createElement("button");
somedayButton.textContent = "Someday";

const logbookButton = document.createElement("button");
logbookButton.textContent = "Logbook";

navContainer.appendChild(addButton);
navContainer.appendChild(projectsButton);
navContainer.appendChild(homeButton);
navContainer.appendChild(anytimeButton);
navContainer.appendChild(somedayButton);
navContainer.appendChild(logbookButton);

export { navContainer, addButton, projectsButton, homeButton };
