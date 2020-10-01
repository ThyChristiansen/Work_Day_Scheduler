$(document).ready(function(){
    function Calander(){
        var momentDate = moment().format('MMMM Do YYYY, h:mm a');
        var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
        
        function currentDay(){
            var currentDay = $("#currentDay").text(momentDate);
            currentDay.append;
        }
        currentDay();
        console.log(currentDay);

    }
    Calander();
})