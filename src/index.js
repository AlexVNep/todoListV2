import "./styles.css";
import header from "./homePage";
import { addButton } from "./navBar";
import { getAddPage } from "./addPage";
import { displayToDo } from "./createToDoContent";
import { container } from "./homePage";

addButton.addEventListener("click", () => {
  container.replaceChildren();
  container.appendChild(getAddPage());
});
displayToDo();
