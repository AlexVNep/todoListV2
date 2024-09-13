import { navContainer } from "./navBar";

// Get Header
const header = document.querySelector("#header");

header.appendChild(navContainer);

//Footer copyright year
const copyRightText = document.querySelector("#date");
const year = new Date().getFullYear();
copyRightText.textContent = `Copyright © Alex Nepomuceno ${year}`;

export default header;
export { copyRightText };
