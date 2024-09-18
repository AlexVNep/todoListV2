function getHeaderNavBar() {
  const navContainer = document.createElement("nav");
  navContainer.setAttribute("id", "nav-container");

  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home-btn");
  homeButton.textContent = "Home";

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "add-btn");
  addButton.textContent = "Add To-Do";

  const addProjectButton = document.createElement("button");
  addProjectButton.setAttribute("id", "add-project-btn");
  addProjectButton.textContent = " Add Projects";

  //   const anytimeButton = document.createElement("button");
  //   anytimeButton.textContent = "Anytime";

  //   const somedayButton = document.createElement("button");
  //   somedayButton.textContent = "Someday";

  //   const logbookButton = document.createElement("button");
  //   logbookButton.textContent = "Logbook";

  navContainer.appendChild(homeButton);
  navContainer.appendChild(addButton);
  navContainer.appendChild(addProjectButton);

  //   navContainer.appendChild(anytimeButton);
  //   navContainer.appendChild(somedayButton);
  //   navContainer.appendChild(logbookButton);
  return navContainer;
}

export { getHeaderNavBar };
