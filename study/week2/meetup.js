const chalk = require('chalk')
const Person = require('./person')
module.exports = class Meetup {
    constructor(name, location, attendees = []) {
        this.name = name
        this.location = location
        this.attendees = attendees
    }
    printAttendeeNames(){
        this.attendees.forEach(printName)
    }
    // static create(obj){
    //     return new Meetup(obj.names, obj.attendees)
    // }

    report(){
        console.log(chalk.blue.bgRed.bold(this.name),'meetup is held at', chalk.green(this.location), 'and number of attendees are ', this.attendees.length)
    }

    static create({ name,location, attendees }){
        const meetup = new Meetup(name, location, attendees)

        meetup.attendees = attendees.map(Person.create)

        return meetup
    }
}

printName = person => console.log(chalk.bgGreen(person.name))