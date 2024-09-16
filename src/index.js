import "./styles.css";
import { header } from "./homePage";
import { addButton } from "./navBar";
import { getAddPage } from "./addPage";
import { displayToDo } from "./createToDoContent";
import { container } from "./homePage";
import { addNewTodoBtn } from "./addPage";
import { getToDoListContainer } from "./createToDoContent";
import { addToDo } from "./addToDo";

addButton.addEventListener("click", () => {
  container.replaceChildren();
  container.appendChild(getAddPage());
});

addNewTodoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  container.replaceChildren();
  addToDo();
  container.appendChild(getToDoListContainer());
});
displayToDo();
