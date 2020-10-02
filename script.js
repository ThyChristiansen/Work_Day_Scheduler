$(document).ready(function(){
    function Calander(){
        var momentDate = moment().format('MMMM Do YYYY, h:mm a');
        var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

        // Allow for the time to be displayed based on when the page was refreashed down to the min
        function currentDay(){
            var currentDay = $("#currentDay").text(momentDate);
            currentDay.append;
        }
        currentDay();

        for (i = 0; i < workHours.length; i++) {
            // create rows for each hour in the work day
            var row = $("<div>")
            row.addClass("row");

            // Create a small col to indicate which hour block the row is
            var hourCol = $("<div>")
            hourCol.text(workHours[i])
            hourCol.addClass("col-2");

            // Create a large col for the input of the ToDo items on teh calander
            var inputCol = $("<input>")
            inputCol.val("Placeholder   Enter note here")
            inputCol.addClass("toDo col-8");

            // Create Id's for each col based on the index they were created from (ie: 0 - 8)
            inputCol.attr("id", "input" + i);

            // repeted input but instead created a button and added id's for each
            var saveBtn = $("<button>")
            saveBtn.addClass("btn btn-primary col-2")
            saveBtn.text("save");
            saveBtn.attr("id", "Btn" + i);

            // Made sure each row, col, and btn populated on the webpage
            $(row).append(hourCol)
            $(row).append(inputCol)
            $(row).append(saveBtn);
            $(".container").append(row);
          }

          // create a function for when each save btn is pushed it saves the input in local storage
          $("#Btn0").on("click", function (event) {
              event.preventDefault();

              var input0 = $("#input0").val();
              localStorage.setItem("toDo0", input0);
          });
          var savedInput0 = localStorage.getItem("toDo0");
          $("#input0").val(savedInput0);
          console.log(savedInput0);
    }
    Calander();
})