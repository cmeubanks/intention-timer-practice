var studyBtn = document.getElementById('study-btn')
var meditateBtn = document.getElementById('meditate-btn')
var exerciseBtn = document.getElementById('exercise-btn')
var radioBtns = document.querySelectorAll('.radio-btn')
var startBtn = document.querySelector('.start-activity')
var userActivity = document.getElementById('userActivity') 
var userMinutes = document.getElementById('userMinutes')
var userSeconds = document.getElementById('userSeconds')

radioBtns.addEventListener('checked', activate)
startBtn.addEventListener('click', submit)

function activate() {
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].value === 'study' && radioBtns[i].checked) {
            
        }
    }

}

function submit() {
    if (typeof (userMinutes || userSeconds) !== 'number') {
        alert (`Please enter minutes and seconds as numbers!`)
    } else {
        var newUserAct = new userActivity()
    }
}