$(document).ready(function(){
    function Calander(){
        var momentDate = moment().format('MMMM Do YYYY, h:mm a');
        var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

        function currentDay(){
            var currentDay = $("#currentDay").text(momentDate);
            currentDay.append;
        }
        currentDay();

        for (i = 0; i < workHours.length; i++) {
            var row = $("<div>")
            row.addClass("row");

            var hourCol = $("<div>")
            hourCol.text(workHours[i])
            hourCol.addClass("col-2");

            var inputCol = $("<div>")
            inputCol.text("Placeholder   Enter note here")
            inputCol.addClass("toDo col-8");

            var saveBtn = $("<button>")
            saveBtn.addClass("btn btn-primary saveBtn col-2")
            saveBtn.text("save");
            $(row).append(hourCol).append(inputCol).append(saveBtn);
            $(".container").append(row);
          }
    }
    Calander();
})