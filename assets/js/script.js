var CurrentDay = document.getElementById('currentDay');
var currentDayEl = document.createElement("h2");
var containerEl = document.getElementById('containerId');

  function loadLocalStorage() {
    var timeBlocks = $(".time-block").children();
  
    for (var key in localStorage) {
      for (i = 0; i < timeBlocks.length; ++i) {
        var block = $(timeBlocks[i]).children()
        var time = block[0].innerHTML
  
        if (time === key)
          block[1].innerHTML = localStorage[key];
      }
    }
  }

  loadLocalStorage();
  document.addEventListener('DOMContentLoaded', loadLocalStorage());

$("section").on("click", "p.tasks", function(event) {
    event.stopPropagation;
    event.stopImmediatePropagation;
    var classes = $(this).attr('class');

  var text = $(this)
    .text()
    .trim();

  var textInput = $("<textarea>").addClass(classes).val(text);
  $(this).replaceWith(textInput);
});

$("section").on("focusout", "textarea.tasks", function() {
    var classes = $(this).attr('class');
  var text = $(this)
    .val()
    .trim();

  var textInput = $("<p>").addClass(classes).text(text);
  $(this).replaceWith(textInput);
});

$(".saveBtn").on('click', function(event) {
    var parent = event.target.parentElement.children
  
    localStorage.setItem(parent[0].innerHTML, parent[1].innerHTML);
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