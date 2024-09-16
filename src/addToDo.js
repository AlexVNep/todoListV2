const myTodoList = [];

function ToDo(title) {
  this.title = title;
}

const todo1 = new ToDo("Go to gym");
const todo2 = new ToDo("Buy milk");
const todo3 = new ToDo("Buy tap parts");

myTodoList[0] = todo1;
myTodoList[1] = todo2;
myTodoList[2] = todo3;

function addToDo() {
  myTodoList.forEach((todo) => {
    console.log(todo.title);
  });
}

export { addToDo };
