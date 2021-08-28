var CurrentDayEl = document.getElementById('currentDay');
var currentDate = document.createElement("h2");

const today = moment();
console.log(today.format('MMM Do, YYYY'));

currentDate.textContent = today.format('MMM Do, YYYY');
CurrentDayEl.appendChild(currentDate);
