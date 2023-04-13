// Wrap all code that interacts with the DOM in a call to jQuery to ensure that


// !JQuery
// $(document).ready(() => {
//   pageLoad();
  
// });

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// ! global variables
var currentTime = dayjs();
var currentMin = dayjs().format('m');
var currentHour = dayjs().format('H');
var hourBlock = $('.time-block');
var writtenNotes = $('textarea');
var notes;

 $.each(writtenNotes, () =>{
    this.value ="";
  });
console.log(writtenNotes);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


function saveNotes(notes){
    localStorage.setItem('notes',JSON.stringify(notes));
 };


  // TODO: Add code to apply the past, present, or future class to each time
 
function updateScheduleTime(){
  hourBlock.removeClass('past present future');
  $.each(hourBlock, function (blockIndex){
    if(blockIndex + 1 < currentHour){
      $(this).addClass('past');
    } else if (blockIndex + 1 == currentHour){
      $(this).addClass('present');
    } else{
      $(this).addClass('future');
    }
  })
};
  updateScheduleTime();
  
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // ! Issue saving data
 function readLocalStorage(){
  var notes = localStorage.getItem('notes');
  if(notes){
    notes = JSON.parse(notes);
  } else {
    notes = [];
  }
  console.log(notes);
  return notes;
 };

 

 function printNotes(){
  writtenNotes.empty();
  var notes = readLocalStorage();
  $.each(notes, () =>{
    note = notes;
    writtenNotes.text(note);
  })
  return;
 };



 function addNewNotes(e){
  e.preventDefault();
  var newNote = notes;
  var notes = readLocalStorage();
notes.push(newNote);
  saveNotes(notes);
  printNotes();
 };

  //
  // TODO: Add code to display the current date in the header of the page.
  // add interval every sec to update 
 // !Timer
 function updateTime(){
  
   $('#currentDay').text(currentTime.format('ddd, MMM D, YYYY h:mm A'));
   
  };

updateTime();

setInterval(()=> {
  currentTime = dayjs();
  if (currentMin < currentTime.format('m') ){
    updateTime();
  } else if (currentMin > currentTime.format('m')){
    {
      updateScheduleTime();
      $('#currentDay').text(currentTime.format('ddd, MMM D, YYYY h:mm A'));
    }
  }
}, 1000);

printNotes();

});


// TODO: add an alert function that calls an alert when a saved text area class is set to present.

// ! criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// !Pseudo-code
//! Upon Opening the app
// i need all 24 hours of the day to display
// I need to add the current date and time in the header (<p>)
// I need the color coding backgrounds of past, present, and future to display based on the time of day. (rest.api)
// 


