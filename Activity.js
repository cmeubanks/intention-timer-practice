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
