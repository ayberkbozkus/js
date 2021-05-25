// console.log('hello world!')

// const add = (num1, num2) => num1 + num2

// const multiply = (num1, num2) => num1 * num2

// const additionalResult = add(5,3)

const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Database = require('./database')

// console.log(chalk.blue.bgRed.bold('Hello world!'));

// const mert = new Person('Mert',34)
// const armagan = new Person('Armagan',35)

// mert.greet(armagan)

// const wtmb = new Meetup('WTM Berlin')

// armagan.attend(wtmb)
// mert.attend(wtmb)

// wtmb.printAttendeeNames()

// Database.save("data.json",wtmb)

// // const loadedFile = Database.load('data.json')
// Database.load('data.json', (err, loadedFile) => {
//     if (err) {
//         console.log('Hey, an error accured', err)
//         return
//     }
    
//     console.log('hello!')

//     const wtmb2 = Meetup.create(loadedFile)
//     const omur = new Person('Omur',30)
//     omur.attend(wtmb2)
//     wtmb2.printAttendeeNames()
//     console.log(wtmb2.name)
// })
// // console.log(loadedFile.name)

// // const wtmb2 = Meetup.create(loadedFile)
// // wtmb2.printAttendeeNames()

const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

const wtmb = new Meetup('Women Techmarkers Berlin', 'Wayfair')
armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.report()

const wayfairMeetup = new Meetup('Wayfair', 'Location')
Database.save('meetup.json', wtmb)
const loadedFile = Database.load('meetup.json')
const meetup = Meetup.create(loadedFile)
meetup.report()
// console.log(loadedFile.attendees[0].name)
console.log(meetup.attendees[0].attend(wayfairMeetup))
console.log(meetup.attendees[1].attend(wayfairMeetup))
console.log(meetup.attendees[1].attend(wayfairMeetup))
wayfairMeetup.report()