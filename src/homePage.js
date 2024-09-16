import { navContainer } from "./navBar";
import { projectsContainer } from "./projectsNav";

// Get Header
const header = document.querySelector("#header");

header.appendChild(navContainer);
document.body.appendChild(projectsContainer);
const container = document.querySelector("#container");

//Footer copyright year
const copyRightText = document.querySelector("#date");
const year = new Date().getFullYear();
copyRightText.textContent = `Copyright © Alex Nepomuceno ${year}`;

export { header, container, copyRightText };
