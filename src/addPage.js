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

const addNewTodoBtn = document.createElement("button");
addNewTodoBtn.textContent = "+";
addNewTodoBtn.setAttribute("type", "submit");

todoForm.appendChild(todoTitleLabel);
todoForm.appendChild(todoTitleInput);
todoForm.appendChild(addNewTodoBtn);

function getAddPage() {
  return addPage;
}

export { getAddPage, addNewTodoBtn, todoTitleInput };
