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
            row.addClass("row time-block");

            // Create a small col to indicate which hour block the row is
            var hourCol = $("<div>")
            hourCol.text(workHours[i])
            hourCol.addClass("col-2 hour");

            // Create a large col for the input of the ToDo items on teh calander
            var inputCol = $("<input>")
            inputCol.val("Placeholder, Enter note here")
            inputCol.addClass("toDo col-8 description");

            // Create Id's for each col based on the index they were created from (ie: 0 - 8)
            inputCol.attr("id", "input" + i);

            // repeted input but instead created a button and added id's for each
            var saveBtn = $("<button>")
            saveBtn.addClass("btn btn-primary col-2 saveBtn")
            saveBtn.append($("<i>").addClass("far fa-save"));
            saveBtn.attr("id", "Btn" + i);

            // Made sure each row, col, and btn populated on the webpage
            $(row).append(hourCol)
            $(row).append(inputCol)
            $(row).append(saveBtn);
            $(".container").append(row);
          }

            // create a function for when each save btn is clicked it saves the input in local storage
            // local storage btn 0
            $("#Btn0").on("click", function (event) {
                event.preventDefault();

                var input0 = $("#input0").val();
                localStorage.setItem("toDo0", input0);
            });

            var savedInput0 = localStorage.getItem("toDo0");
            $("#input0").val(savedInput0);

            // local storage btn 1
             $("#Btn1").on("click", function (event) {
                event.preventDefault();

                var input1 = $("#input1").val();
                localStorage.setItem("toDo1", input1);
            });

            var savedInput1 = localStorage.getItem("toDo1");
            $("#input1").val(savedInput1);

            // local storage btn 2
            $("#Btn2").on("click", function (event) {
                event.preventDefault();

                var input2 = $("#input2").val();
                localStorage.setItem("toDo2", input2);
            });

            var savedInput2 = localStorage.getItem("toDo2");
            $("#input2").val(savedInput2);
            
            // local storage btn 3
            $("#Btn3").on("click", function (event) {
                event.preventDefault();

                var input3 = $("#input3").val();
                localStorage.setItem("toDo3", input3);
            });

            var savedInput3 = localStorage.getItem("toDo3");
            $("#input3").val(savedInput3);

            // local storage btn 4
            $("#Btn4").on("click", function (event) {
                event.preventDefault();

                var input4 = $("#input4").val();
                localStorage.setItem("toDo4", input4);
            });

            var savedInput4 = localStorage.getItem("toDo4");
            $("#input4").val(savedInput4);

            // local storage btn 5
            $("#Btn5").on("click", function (event) {
                event.preventDefault();

                var input5 = $("#input5").val();
                localStorage.setItem("toDo5", input5);
            });

            var savedInput5 = localStorage.getItem("toDo5");
            $("#input5").val(savedInput5);

            // local storage btn 6
            $("#Btn6").on("click", function (event) {
                event.preventDefault();

                var input6 = $("#input6").val();
                localStorage.setItem("toDo6", input6);
            });

            var savedInput6 = localStorage.getItem("toDo6");
            $("#input6").val(savedInput6);

            // local storage btn 7
            $("#Btn7").on("click", function (event) {
                event.preventDefault();

                var input7 = $("#input7").val();
                localStorage.setItem("toDo7", input7);
            });

            var savedInput7 = localStorage.getItem("toDo7");
            $("#input7").val(savedInput7);

            // local storage btn 8
            $("#Btn8").on("click", function (event) {
                event.preventDefault();

                var input8 = $("#input8").val();
                localStorage.setItem("toDo8", input8);
            });

            var savedInput8 = localStorage.getItem("toDo8");
            $("#input8").val(savedInput8);

            // now to change the color of the rows based on the time of day
            function changeColor() {
                var currentHour = momnet().hours();
                console.log(currentHour);

                $(".time-block").each(function(){
                    var calenderHour = parseInt($(this).attr("id"));

                    if (calanderHour < currentHour){
                        $(this).addClass("past");

                    }
                    else if (calenderHour --- currentHour){
                        $(this).removeClass("past");
                        $(this).removeClass("present");
                    }
                    else {
                        $(this).removeClass("past");
                        $(this).removeClass("present");
                        $(this).removeClass("future");
                    }
                    
                })
            }
            changeColor();
    }
    Calander();
})