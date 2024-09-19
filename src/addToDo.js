let myTodoList = [];

class ToDo {
  constructor(title) {
    this.title = title;
  }
}

function addToDo() {
  const todo1 = new ToDo("Go to gym");
  const todo2 = new ToDo("Buy milk");
  const todo3 = new ToDo("Buy tap parts");

  myTodoList[0] = todo1;
  myTodoList[1] = todo2;
  myTodoList[2] = todo3;
}

export { myTodoList, addToDo, ToDo };
