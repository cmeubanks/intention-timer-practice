// var Activity = require('./Activity.js
// var activityCard;
var cards = [];
var studyBtn = document.getElementById('studyBtn')
var meditateBtn = document.getElementById('meditateBtn')
var exerciseBtn = document.getElementById('exerciseBtn')
var radioBtns = document.querySelectorAll('input[type="radio"]')
var startBtn = document.querySelector('.start-activity')
var startTimerBtn = document.getElementById('startTimerBtn')
var userActivity = document.getElementById('userActivity')
var userMinutes = document.getElementById('userMinutes')
var userSeconds = document.getElementById('userSeconds')
var errorWrapper = document.getElementById('errorWrapper')
var timerPage = document.getElementById('timerPage')
var newActivityPage = document.getElementById('newActivityPage')
var timerEvent = document.getElementById('timerEvent')
var displayTimerFunction = document.getElementById('displayTimerFunction')
var studyBtnImg = document.getElementById('studyBtnImg')
var meditateBtnImg = document.getElementById('meditateBtnImg')
var exerciseBtnImg = document.getElementById('exerciseBtnImg')



// Activity Class Constructor
class Activity {
    constructor(category, description, minutes, seconds) {
        this.category = category
        this.description = description
        this.minutes = minutes
        this.seconds = seconds
        this.completed = false
        this.id = null
    }
    countdown() {

    }

    markComplete() {

    }

    saveToStorage() {

    }
}


// radioBtns.addEventListener('checked', activate)
startBtn.addEventListener('click', submit)
studyBtn.addEventListener('click', changeImage)
meditateBtn.addEventListener('click', changeImage)
exerciseBtn.addEventListener('click', changeImage)
startTimerBtn.addEventListener('click', startTimer)
// global
// studyBtnImg.classList.add('active-study-btn')
function switchForm() {
  timerPage.classList.remove('hidden')
  newActivityPage.classList.remove('hidden')
}
// functions

function inputUserValues() {
  // displayTimer.innerText = `${userMinutes.value} : ${userSeconds.value}`
  timerEvent.innerText = userActivity.value
}

function switchForm() {
  timerPage.classList.remove('hidden')
  newActivityPage.classList.add('hidden')
}

function submit() {
    event.preventDefault()
    if (!userActivity.value || !userMinutes.value || !userSeconds.value || !isBtnChecked()) {
        // Why is the bang above working???
        errorWrapper.classList.remove('hidden')
    } else if ((userMinutes.value || userSeconds.value) === 'e') {
//  Remember to write another error handler to stop numbers with a length longer than 2 from being entered for seconds/minutes (not >= 60)
        errorWrapper.classList.remove('hidden')
    } else {
        var activityCard = new Activity (whichBtn(), userActivity.value, userMinutes.value, userSeconds.value)
        cards.push(activityCard)
        inputUserValues()
        switchForm()
        setStartBtnColor()
    }
}

function isBtnChecked() {
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            return true
        }
    }
    return false
}

function whichBtn() {
    var theRightBtn = null
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
        theRightBtn = radioBtns[i].value
        return theRightBtn
        }
    }
}


function changeImage() {
  for (var i = 0; i < radioBtns.length; i++){
    if (radioBtns[i].checked && radioBtns[i].value === "study") {
    studyBtnImg.classList.toggle('hidden')
    studyBtnImgAct.classList.toggle('hidden')
    // set timeout (func, time, element1, element2)
  } if (radioBtns[i].checked && radioBtns[i].value === "meditate") {
    toggleHidden(meditateBtnImg, meditateBtnImgAct);
    // toggleFunc() {
    //   setTimeout
    // }
    // meditateBtnImg.classList.toggle('hidden')
    // meditateBtnImgAct.classList.toggle('hidden')
    setTimeout (toggleHidden, 1000, meditateBtnImg, meditateBtnImgAct)
  } if (radioBtns[i].checked && radioBtns[i].value === "exercise") {
    exerciseBtnImg.classList.toggle('hidden')
    exerciseBtnImgAct.classList.toggle('hidden')
    // set timeout (func, time, element1, element2)
  }
 }
}

function toggleHidden (element1, element2) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
  setTimeout (unToggleHidden, 1000, element1, element2)
}

function unToggleHidden (element1, element2) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
}
//Write a new function that fires after a delay to fire a seond round of toggles to essentially reset the image to the inactive image
//set timeout (wait for set amount of time)

function setStartBtnColor() {
  for (var i = 0; i < radioBtns.length; i++){
    if (radioBtns[i].checked && radioBtns[i].value === "study") {
    startTimerBtn.style.borderColor = "#B3FD78";
  } if (radioBtns[i].checked && radioBtns[i].value === "meditate") {
    startTimerBtn.style.borderColor = "#C278FD";
  } if (radioBtns[i].checked && radioBtns[i].value === "exercise") {
    startTimerBtn.style.borderColor = "#FD8078";
  }
 }
}


// var second = 1000;
// var minute = second * 60;
// var hour = minute * 60;

function startTimer() {
  startTimerBtn.disabled = true
  var minuteStart = (+userMinutes.value * 60)
  var secondStart = +userSeconds.value
  var totalSeconds = (secondStart + minuteStart)

  if (totalSeconds > 0) {
  var intervalTimer = setInterval(timeLeft, 1000)
  function timeLeft() {
  totalSeconds--
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = Math.floor(totalSeconds % 60);
  displayTimerFunction.innerText = `${minutes} : ${seconds}`
  if (totalSeconds === 0) {
  clearInterval(intervalTimer)
   }
  }
 }
}



// function startTimer() {
//   debugger
//   var startCountDown = timeLeft();
//   displayTimer.innerHTML = `${startCountDown.minutes} : ${startCountDown.seconds}`
//
// }
