Person = class {
    constructor(name, age) {
        console.log('Hi, i am created, my name is', name)
        this.name = name
        this.age = age
        this.meetups = []
    }

    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name)
    }

    attend(meetup){
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
}

armagan = new Person('Armagan', 35)
mert = new Person('Mert', 34)

armagan.greet(mert)

Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
}

printName = person => console.log(person.name)

wtmb = new Meetup('Women  Techmakers Berlin')

armagan.attend(wtmb)
armagan.attend(wtmb)
mihri = new Person('Mihri',33)
mihri.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()