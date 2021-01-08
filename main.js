// var Activity = require('./Activity.js');

var studyBtn = document.getElementById('study-btn')
var meditateBtn = document.getElementById('meditate-btn')
var exerciseBtn = document.getElementById('exercise-btn')
var radioBtns = document.querySelectorAll('input[type="radio"]') 
var startBtn = document.querySelector('.start-activity')
var userActivity = document.getElementById('userActivity') 
var userMinutes = document.getElementById('userMinutes')
var userSeconds = document.getElementById('userSeconds')
var errorWrapper = document.getElementById('errorWrapper')


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

// functions

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
        console.log(activityCard)
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
        }
    }
    return theRightBtn
}