const navContainer = document.createElement("nav");

const addButton = document.createElement("button");
addButton.textContent = "Add To-Do";

const todayButton = document.createElement("button");
todayButton.textContent = "Today";

const upcomingButton = document.createElement("button");
upcomingButton.textContent = "Upcoming";

const anytimeButton = document.createElement("button");
anytimeButton.textContent = "Anytime";

const somedayButton = document.createElement("button");
somedayButton.textContent = "Someday";

const logbookButton = document.createElement("button");
logbookButton.textContent = "Logbook";

navContainer.appendChild(addButton);
navContainer.appendChild(todayButton);
navContainer.appendChild(upcomingButton);
navContainer.appendChild(anytimeButton);
navContainer.appendChild(somedayButton);
navContainer.appendChild(logbookButton);

export { navContainer, addButton };
