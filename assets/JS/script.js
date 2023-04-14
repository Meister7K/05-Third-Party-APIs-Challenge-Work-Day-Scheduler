// Wrap all code that interacts with the DOM in a call to jQuery to ensure that


// !JQuery
// $(document).ready(() => {
//   pageLoad();
  
// });

// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {

// ! global variables
var currentTime = dayjs();
var currentMin = dayjs().format('m');
var currentHour; 
var hourBlock = $('.time-block');
var hoursArray;

var textArea = $('textarea');
// var notes;

 $.each(textArea, () => {
    this.value ="";
  });

  if(localStorage.getItem('localNotes')){
    hoursArray = JSON.parse(localStorage.getItem('localNotes'))
  } else {
    hoursArray = [];
  };

  function updateStorage(){
    var buttonIndex = (Number($(this).attr('id'))-1);
    console.log(buttonIndex);

    if(textArea[buttonIndex].value.trim() != '') {
      hoursArray[buttonIndex] = {
        time: $('.hour')[buttonIndex].textContent.trim(),
        note: textArea[buttonIndex].value
      }
      localStorage.setItem('localNotes', JSON.stringify(hoursArray));
    }
    console.log(hoursArray);
  };

  function pullLocalNotes(){
    $.each(hoursArray, function (i){
      if(hoursArray[i]){
        textArea[i].value = hoursArray[i].note;
      }
    })
  };
// console.log(writtenNotes);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

// function saveText() {
//   var value = $(this).siblings('.description').val();
//   var time = $(this).parent().attr('id');
//   localStorage.setItem(time, value);
// }
// $('#hour-01 .description').val(localStorage.getItem('hour-1'));
  // readLocalStorage()
// function readLocalStorage(){
//   var notes = localStorage.getItem(time,value);

//   if(time,value){
//     notes = push(notes);
//   } else {
//     notes = [];
//   }

//   return notes;
//  };

// function saveToLocal(time, value){
//     localStorage.setItem(time, value);
    
   
//  };

//  function printFromLocalStorage(){
//   var notes ='';
// notes = readLocalStorage();
// for (i = 1; i< localStorage.length; i++){
//   if (localStorage.key[i] == time){
//     $(this.writtenNotes).append.text(value[i])
//   } else{
//     return '';
//   }

//   }
//  }


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
  currentHour = currentTime.format('H');
};
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
  // add interval every min to update 
 // !Timer
updateTime();
 function updateTime(){
   $('#currentDay').text(currentTime.format('ddd, MMM D, YYYY h:mm:ss A'));
   
  };

setInterval(()=> {
  currentTime = dayjs();
  if (currentMin <= currentTime.format('m') ){
    updateTime();
    updateScheduleTime();
  } else if (currentMin > currentTime.format('m')){
    
      updateTime();
      updateScheduleTime();
      $('#currentDay').text(currentTime.format('ddd, MMM D, YYYY h:mm:ss A'));
    
  }
}, 1000);



updateScheduleTime();
pullLocalNotes();
$('button').click(updateStorage);
// });





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


