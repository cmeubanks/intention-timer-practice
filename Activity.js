// // module.exports = Activity;
// class Activity {
//     constructor(category, description, minutes, seconds) {
//         this.category = category
//         this.description = description
//         this.minutes = minutes
//         this.seconds = seconds
//         this.completed = false
//         this.id = null
//         console.log('This is working')
//     }
//     countdown() {

//     }

//     markComplete() {

//     }

//     saveToStorage() {

//     }
// }

class Activity {
    constructor(category, description, minutes, seconds) {
        this.category = category
        this.description = description
        this.minutes = minutes
        this.seconds = seconds
        this.completed = false
        this.id = Date.now()
    }
    countdown() {

    }

    markComplete() {

    }

    saveToStorage() {
    var objectToStore = this.id.toString();
    localStorage.setItem(objectToStore, JSON.stringify(this))
    }
}

// default export Activity;