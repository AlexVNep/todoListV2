import { myTodoList, setMyTodoList } from "./addToDo";
import { myProjects, setMyGetProject } from "./addProjects";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storageCheck() {
  if (
    !localStorage.getItem("todoList") &&
    !localStorage.getItem("getProject")
  ) {
    console.log("Not in storage");
  } else {
    console.log("I am in storage");
    getList();
    getProject();
  }
}

function getList() {
  let todoList = JSON.parse(localStorage.getItem("todoList")); //All items must be use this key

  if (!todoList) {
    todoList = myTodoList;
  }
  setMyTodoList(todoList);
}

function getProject() {
  let getProject = JSON.parse(localStorage.getItem("getProject"));

  if (!getProject) {
    getProject = myProjects;
  }
  setMyGetProject(getProject);
}

export { storageAvailable, storageCheck };
