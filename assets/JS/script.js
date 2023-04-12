// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// !JQuery
$(document).ready(() => {
  console.log("web page loader")
});
// ! global variables
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // var saveBtn = $('saveBtn');
  // TODO: Add code to apply the past, present, or future class to each time
  // !Timer
// var hourBlock = $('.time-block');
// forEach loop to loop through all the hourBlocks
    // if (this.hourBlock.value )
    // hourBlock.child(0).addClass('past');

    // hourBlock.child(0).addClass('present');

    // hourBlock.child(0).addClass('future');
  
  
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// add interval every sec to update 
  $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY h:mm A'));
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

// !Psudo-code
//! Upon Opening the app
// i need all 24 hours of the day to display
// I need to add the current date and time in the header (<p>)
// I need the color coding backgrounds of past, present, and future to display based on the time of day. (rest.api)
// 


