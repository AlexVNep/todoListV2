const navContainer = document.createElement("nav");

const inboxButton = document.createElement("button");
inboxButton.textContent = "Inbox";

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

navContainer.appendChild(inboxButton);
navContainer.appendChild(todayButton);
navContainer.appendChild(upcomingButton);
navContainer.appendChild(anytimeButton);
navContainer.appendChild(somedayButton);
navContainer.appendChild(logbookButton);

export { navContainer };
