import { navContainer } from "./navBar";
import { projectsContainer } from "./projectsNav";
import { displayToDo } from "./createToDoContent";

// Get Header
const header = document.querySelector("#header");

header.appendChild(navContainer);
document.body.appendChild(projectsContainer);

//Footer copyright year
const copyRightText = document.querySelector("#date");
const year = new Date().getFullYear();
copyRightText.textContent = `Copyright © Alex Nepomuceno ${year}`;

export default header;
export { copyRightText };

displayToDo();
