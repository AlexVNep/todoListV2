import { container } from "./homePage";
import { myTodoList } from "./addToDo";

const todoListCardHeading = document.createElement("h2");
container.appendChild(todoListCardHeading);
todoListCardHeading.textContent = `General To-Do's`;

const todoListCard = document.createElement("div");
todoListCard.classList.add("todo-list-card");
container.appendChild(todoListCard);

const todoUL = document.createElement("ul");
todoListCard.appendChild(todoUL);

// const todoList = document.createElement("li");
// todoUL.appendChild(todoList);

function displayToDo() {
  myTodoList.forEach((todo) => {
    const todoList = document.createElement("li");
    todoUL.appendChild(todoList);
    todoList.textContent = todo.title;
    console.log(todo.title);
  });
}

export { displayToDo };
