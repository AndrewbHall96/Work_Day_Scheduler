
$(document).ready(function () {

  //var saveBtn = $(".savebtn")
  //document.querySelectorAll(".savebtn");

  $(".savebtn").on("click", function () {
    var textValue = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, textValue)
    //saveBtn.addEventListener("click", function (event) {
    //event.preventDefault();

    //   var calendar = {
    //     hour9: document.getElementById("nineText").value,
    //     hour10: document.getElementById("tenText").value,
    //     hour11: document.getElementById("elevenText").value,
    //     hour12: document.getElementById("twelveText").value,
    //     hour1: document.getElementById("oneText").value,
    //     hour2: document.getElementById("twoText").value,
    //     hour3: document.getElementById("threeText").value,
    //     hour4: document.getElementById("fourText").value,
    //     hour5: document.getElementById("fiveText").value,
    //     hour6: document.getElementById("sixText").value,
    //   }
    //   console.log(calendar);

    //   localStorage.setItem("calendar", JSON.stringify(calendar));
    //   renderCalendarText();
    // });


  })

  function doDate() {
    //var now = new Date();
    //console.log(now.toLocaleString())
    $("#currentTime").text(new Date().toLocaleString());
  }

  setInterval(doDate, 1000);
  //doDate();

  //renderCalendarText();

  // function displayText(type, message) {
  //   msgDiv.textContent = message;
  //   msgDiv.setAttribute("class", type);
  // }

//instead of accessing the id, I can create another class. Make it a number to represent the hour. 
  function hourUpdater() {
    var currentHour = moment().hours()
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1])
      if (blockHour < currentHour) {
        $(this).addClass("past")
      } else if (blockHour === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")

      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }

    })
  }

  hourUpdater()

  function renderCalendarText() {
    //var nineHour = localStorage.getItem("nine-text");
    //This is a function 

    var calendar = JSON.parse(localStorage.getItem("calendar"));
    console.log("renderCalendarText -> calendar")
    console.log(calendar)
    if (!calendar) {
      return;
    }

    $("#")
    // nineText.textContent = calendar.hour9;
    // tenText.textContent = calendar.hour10;
    // elevenText.textContent = calendar.hour11;
    // twelveText.textContent = calendar.hour12;
    // oneText.textContent = calendar.hour1;
    // twoText.textContent = calendar.hour2;
    // threeText.textContent = calendar.hour3;
    // fourText.textContent = calendar.hour4;
    // fiveText.text = calendar.hour5;
    // sixText.textContent = calendar.hour6;
    //Assignment statements^  Assignment the text boxes to text. Assigning text content with information from local storage.

  }

  
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
$("#hour-18 .description").val(localStorage.getItem("hour-18"))

})


