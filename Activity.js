// module.exports = Activity;
class Activity {
    constructor(category, description, minutes, seconds) {
        this.category = category
        this.description = description
        this.minutes = minutes
        this.seconds = seconds
        this.completed = false
        this.id = null
        console.log('This is working')
    }
    countdown() {

    }

    markComplete() {

    }

    saveToStorage() {

    }
}

// default export Activity;