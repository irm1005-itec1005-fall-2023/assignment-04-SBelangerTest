/* Assignment 03: Starting a Todo List App
*
* You are going to build the brains of a simple Todo List application
* in JavaScript. You don't have to worry about the look of the app for now.
* We will make it look awesome in Assignment 04.
*
* For now, we'll focus on giving the application the following features:
* 1. Add a new todo item
* 2. Delete a todo item
* 3. Mark a todo item as completed
* 4. Delete a todo item
* 5. Clear all completed todos
*
* The following code is the starting point for this assignment.
*
* You will have to write the code to initialise the todoItems array and
* for the functions below.
*
* 1. addToDoItem(text)
* 2. removeToDoItem(todoId)
* 3. markToDoItemAsCompleted(todoId)
* 4. deleteToDoItem(todoId)
* 5. clearCompletedTasks()
*
* YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
*
* As you write each function, press on the "Run Tests" button in the browser
* to run the automated tests and check your work.
*
* You can also add your own tests and debug statements at the bottom of this file.
*
*/

// Data storage - Initialize the array of To Do items
let todoItems = [];

// Function to add a todo to the list
function addToDoItem(item) {
  const newTodo = {
    id: todoItems.length,
    text: item,
    completed: false,
  };
  todoItems.push(newTodo);
}

// Function to remove a todo from the list
function removeToDoItem(item) {
  todoItems = todoItems.filter(todo => todo.id !== item);
}

// Function to mark a task as completed
function markToDoItemAsCompleted(item) {
  const todoItem = todoItems.find(todo => todo.id === item);
  if (todoItem) {
    todoItem.completed = true;
  }
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  todoItems = todoItems.filter(todo => todo.id !== todoId);
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  todoItems = todoItems.filter(todo => !todo.completed);
}



// You can write your own tests here if you would like to test your code
// For example:
// addToDoItem("Test ToDo");
// console.log(todoItems);
// removeToDoItem(0);
// console.log(todoItems);
// markToDoItemAsCompleted(1);
// console.log(todoItems);
// deleteToDoItem(1);
// console.log(todoItems);
// clearCompletedTasks();
// console.log(todoItems);
// Initialize the array of To Do items
// Initialize the array of To Do items

console.log(todoItems);

