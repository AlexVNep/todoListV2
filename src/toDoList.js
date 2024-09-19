import { myTodoList, addToDo } from "./addToDo";

addToDo(); //Need this for the list to show

function getToDoListContainer() {
  const todoListContainer = document.createElement("div");
  todoListContainer.setAttribute("id", "todo-list-container");

  const todoListCardHeading = document.createElement("h2");
  todoListContainer.appendChild(todoListCardHeading);
  todoListCardHeading.textContent = `General To-Do's`;

  const todoListCard = document.createElement("div");
  todoListCard.classList.add("todo-list-card");
  todoListContainer.appendChild(todoListCard);

  const todoUL = document.createElement("ul");
  todoListCard.appendChild(todoUL);

  myTodoList.forEach((todo) => {
    const todoList = document.createElement("li");
    todoUL.appendChild(todoList);
    todoList.textContent = todo.title;
    console.log(todo.title);
    todoList.addEventListener("click", () => {
      if (todoList.style.textDecoration === "line-through") {
        todoList.style.textDecoration = "none";
      } else {
        todoList.style = "text-decoration: line-through";
      }
    });
  });

  return todoListContainer;
}

export { getToDoListContainer };
