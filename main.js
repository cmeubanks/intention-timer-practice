
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
var cardWrapper = document.querySelector('.card-wrapper')
var logActBtn = document.getElementById('logActBtn')
var noAct = document.querySelector('.no-activities')
var deck = document.getElementById('deck')
var completedPage = document.getElementById('completedPage')
var timerWrapper = document.getElementById('timerWrapper')
var createNewBtn = document.getElementById('createNewBtn')
var deck = document.getElementById('deck')


// global
startBtn.addEventListener('click', submit)
startTimerBtn.addEventListener('click', startTimer)
logActBtn.addEventListener('click', populate)
createNewBtn.addEventListener('click', backtoForm)
userMinutes.addEventListener('keypress', preventTimerErrors)
userSeconds.addEventListener('keypress', preventTimerErrors)
window.addEventListener('load', loadStorage)

//functions

function switchForm() {
  removeHidden(timerPage)
  addHidden(newActivityPage)
}

function removeHidden(elementVar) {
  elementVar.classList.remove('hidden')
}

function addHidden(elementVar) {
  elementVar.classList.add('hidden')
}

function loadStorage() {
  var justIds = Object.keys(localStorage)
  if (justIds.length > 0) {
    addHidden(noAct)
    removeHidden(deck)
    for (var i = 0; i < justIds.length; i++) {
      var hold = JSON.parse(localStorage.getItem(justIds[i]))
      cards.push(hold)
    }
    reloadCards();
  }
}

function backtoForm() {
  startTimerBtn.disabled = false
  startTimerBtn.innerText = "START"
  addHidden(completedPage)
  removeHidden(newActivityPage)
  userActivity.value = '';
  userMinutes.value = '';
  userSeconds.value = '';
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      radioBtns[i].checked = false;
    }
  }
}


function inputUserValues() {
  if(userSeconds.value < 10 && userSeconds.value.charAt(0) !== '0') {
    userSeconds.value = `0` + `${userSeconds.value}`
  }
  if(userMinutes.value < 10 && userMinutes.value.charAt(0) !== '0') {
    userMinutes.value = `0` + `${userMinutes.value}`
  }
  displayTimerFunction.innerText = `${userMinutes.value} : ${userSeconds.value}`
  timerEvent.innerText = userActivity.value
}

function preventTimerErrors(event) {
 if(event.which < 1 || event.which > 60) {
   event.preventDefault();
}
}

function submit() {
    event.preventDefault()
    if (!userActivity.value || !userMinutes.value || !userSeconds.value || !isBtnChecked()) {
        removeHidden(errorWrapper)
    } else if ((userMinutes.value || userSeconds.value) == 'e') {
        removeHidden(errorWrapper)
    } else {
        var activityCard = new Activity (whichBtn(), userActivity.value, userMinutes.value, userSeconds.value)
        cards.push(activityCard)
        activityCard.saveToStorage()
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

function markerColor(category) {
  if (category === 'study') {
    return '#B3FD78'
  } else if (category === 'meditate') {
    return '#C278FD'
  } else if (category === 'exercise') {
    return '#FD8078'
  }
}

function populate() {
  addHidden(noAct)
  addHidden(timerPage)
  removeHidden(completedPage)
  reloadCards()
}

function reloadCards() {
  removeHidden(deck)
  cardWrapper.innerHTML = ''
  for (var i = 0; i < cards.length; i++) {
    cardWrapper.innerHTML += `
    <article class="card">
      <div class="card-details">
        <div>
          <h4>${cards[i].category}</h4>
          <p class="card-time" id="cardTime">${cards[i].minutes} MINS ${cards[i].seconds} SECONDS</p>
        </div>
          <p class="card-activity" id="card-activity">${cards[i].description}</p>
      </div>
      <div class="marker-wrapper">
        <div class="card-marker" style="background: ${markerColor(cards[i].category)}"></div>
      </div>
    </article>
    `
  }
}

function startTimer() {
  startTimerBtn.disabled = true
  var minuteStart = (+userMinutes.value * 60)
  var secondStart = +userSeconds.value
  var totalSeconds = (secondStart + minuteStart)

  if (totalSeconds > 0) {
    var intervalTimer = setInterval(timeLeft, 1000)
    function timeLeft() {
      totalSeconds--
      var minutes = Math.floor(totalSeconds / 60)
      var seconds = Math.floor(totalSeconds % 60)
      if(seconds < 10 && seconds != '00') {
        seconds = `0` + `${seconds}`
        }
      if(minutes < 10 && seconds != '00') {
        minutes = `0` + `${minutes}`
        }
      displayTimerFunction.innerText = `${minutes} : ${seconds}`
      if (!totalSeconds) {
        clearInterval(intervalTimer)
        startTimerBtn.innerText = "COMPLETE!"
        displayTimerFunction.innerText = `${compliments[Math.floor(Math.random()*compliments.length)]}`
        removeHidden(logActBtn)
      }
    }
  }
}
