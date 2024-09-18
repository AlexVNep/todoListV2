function getHeaderNavBar() {
  const navContainer = document.createElement("nav");
  navContainer.setAttribute("id", "nav-container");

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

  navContainer.appendChild(homeButton);
  navContainer.appendChild(addButton);
  navContainer.appendChild(projectsButton);

  navContainer.appendChild(anytimeButton);
  navContainer.appendChild(somedayButton);
  navContainer.appendChild(logbookButton);
  return navContainer;
}

export { getHeaderNavBar };
