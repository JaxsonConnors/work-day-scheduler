var tasks = {};

var CurrentDay = document.getElementById('currentDay');
var currentDayEl = document.createElement("h2");
var containerEl = document.getElementById('containerId');


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

/*
var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};
*/

// task text was clicked
$("tasks").on("click", "p", function() {
    console.log("Hi");
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

const today = moment();
console.log(today.format('MMM Do, YYYY'));

currentDayEl.textContent = today.format('MMM Do, YYYY');
CurrentDay.appendChild(currentDayEl);

saveTasks();