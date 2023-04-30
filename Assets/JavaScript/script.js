


var today = moment().format("dddd, MMMM Do YYYY ");

var now = moment().format("H A");

$("#currentDay").text(today);


/* planWorkday entries for each hour of the workday */
var planWorkday = [
    { time: "9 AM", 
        event: "" },
    { time: "10 AM", 
        event: "" },
    { time: "11 AM", 
        event: "" },
    { time: "12 PM", 
        event: "" },
    { time: "1 PM", 
        event: "" },
    { time: "2 PM", 
        event: "" },
    { time: "3 PM", 
        event: "" },
    { time: "4 PM", 
        event: "" },
    { time: "5 PM", 
        event: "" },
  ];
  
  /* Local Storage check */
var workEvents = JSON.parse(localStorage.getItem('workDay'));
if (workEvents) {
    planWorkday = workEvents
}


