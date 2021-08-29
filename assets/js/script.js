var tasks = {};

var CurrentDay = document.getElementById('currentDay');
var currentDayEl = document.createElement("h2");
var containerEl = document.getElementById('containerId');


var saveTasks = function() {
    localStorage.setItem(".tasks", JSON.stringify(tasks));
  };

  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem(".tasks"));
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
$("section").on("click", "p.tasks", function(event) {
    event.stopPropagation;
    event.stopImmediatePropagation;

  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("col-sm-10 tasks").val(text);
  $(this).replaceWith(textInput);
});

$("section").on("focusout", "textarea.tasks", function() {
console.log("josh is gei");
  // get current text of p element
  var text = $(this)
    .val()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<p>").addClass("col-sm-10 tasks").text(text);
  $(this).replaceWith(textInput);
});


const today = moment();

currentDayEl.textContent = today.format('dddd MMMM Do, YYYY');
CurrentDay.appendChild(currentDayEl);

moment().hour();
console.log(moment().hour());