import { addToDo, myTodoList, ToDo } from "./addToDo";
import { getToDoListContainer } from "./toDoList";

function getAddPage() {
  const addPage = document.createElement("div");

  const addPageHeading = document.createElement("h2");
  addPageHeading.textContent = "Add A To-Do.";
  addPage.appendChild(addPageHeading);

  const todoForm = document.createElement("form");
  addPage.appendChild(todoForm);

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.textContent = "To-Do: ";
  todoTitleLabel.setAttribute("for", "todo-title");

  const todoTitleInput = document.createElement("input");
  todoTitleInput.setAttribute("id", "todo-title");
  todoTitleInput.setAttribute("type", "text");

  const addNewTodoButton = document.createElement("button");
  addNewTodoButton.setAttribute("id", "new-todo-btn");
  addNewTodoButton.textContent = "+";
  addNewTodoButton.setAttribute("type", "submit");

  addNewTodoButton.addEventListener("click", (event) => {
    const container = document.getElementById("content-container");
    console.log("Add new todo button works");
    event.preventDefault();

    const todoTitle = todoTitleInput.value;
    const newTodo = new ToDo(todoTitle);
    myTodoList.push(newTodo);
    console.log(todoTitle);

    container.replaceChildren();
    container.appendChild(getToDoListContainer());
  });

  todoForm.appendChild(todoTitleLabel);
  todoForm.appendChild(todoTitleInput);
  todoForm.appendChild(addNewTodoButton);
  return addPage;
}

export { getAddPage };
