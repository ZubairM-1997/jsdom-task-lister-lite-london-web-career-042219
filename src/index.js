// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });




const taskbar = document.querySelector("#new-task-description") // selects the new-task-description text bar
const tasksUL = document.getElementById("tasks") // selects the tasks unordered list
const form = document.querySelector("#create-task-form") // selects the form

function renderTask() {

  const taskLI = document.createElement("li") //creates a new element li
  taskLI.innerHTML = ` ${taskbar.value}
  <button id = "delete" >X</button> `
  //HTML of li is replaced with the value of taskbar and a delete (id) button
  tasksUL.append(taskLI) // tasksUL now has contents of tasksLI

  taskLI.querySelector("#delete").addEventListener("click", () => {
    taskLI.remove()
  }) // delete event with function.

};

form.addEventListener("submit", (event) => {
  event.preventDefault()
  renderTask()
  form.reset()
}); // the event action for submitting a form



