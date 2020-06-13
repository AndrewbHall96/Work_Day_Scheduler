//Function that displays  time

//set a variable for the current day
var currentDay = $("#currentDay");

//set a variable for current date and time
var present = moment().format('D. MMMM YYYY H:mm:ss');

function update() {
    $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
  }
  setInterval(update, 1000);
  update;