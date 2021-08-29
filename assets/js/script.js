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

$("section").on("click", "p.tasks", function(event) {
    event.stopPropagation;
    event.stopImmediatePropagation;
    let classes = $(this).attr('class');

  var text = $(this)
    .text()
    .trim();

  var textInput = $("<textarea>").addClass(classes).val(text);
  $(this).replaceWith(textInput);
});

$("section").on("focusout", "textarea.tasks", function() {
    let classes = $(this).attr('class');
  var text = $(this)
    .val()
    .trim();

  var textInput = $("<p>").addClass(classes).text(text);
  $(this).replaceWith(textInput);
});


const today = moment();

currentDayEl.textContent = today.format('dddd MMMM Do, YYYY');
CurrentDay.appendChild(currentDayEl);

var now = moment().hour();
var timeBlocks = $(".time-block").children()

for (i = 0; i < timeBlocks.length; ++i) {
  var block = $(timeBlocks[i]).children()
  var time = block[0].innerHTML

  if (time.includes('AM')) {
    time = time.replace('AM', '')
    time = parseInt(time)
  } else if (time.includes('12PM')) {
    time = 12
  } else {
    time = time.replace('PM', '')
    time = parseInt(time)
    time += 12
  }

  if (time < now) {
    $(block[1]).addClass('past')
  } else if (time === now) {
    $(block[1]).addClass('present')
  } else {
    $(block[1]).addClass('future')
  }
}