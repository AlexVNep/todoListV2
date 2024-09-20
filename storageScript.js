import { myTodoList } from "./src/addToDo";

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
  if (!localStorage.getItem(myTodoList)) {
    console.log("Not in storage");
    populateStorage();
  } else {
    console.log("I am in storage");
    setStyles();
  }
}

function populateStorage() {
  localStorage.setItem("todoList", myTodoList);
}

function setStyles() {
  myTodoList = localStorage.getItem("myTodoList");
  if (!myTodoList) {
    myTodoList = [];
  }
}

export { storageAvailable, populateStorage, storageCheck };
