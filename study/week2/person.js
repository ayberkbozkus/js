module.exports = class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // greet(person) {
    //     console.log("Hello " + person.name + ", my name is " + this.name)
    // }

    // attend(meetup){
    //     this.meetups = meetup.name
    //     meetup.attendees.push(this)
    // }

    attend(meetup){
        meetup.attendees.push(this)
    }

    static create({ name,age }){
        return new Person(name,age)
    }
}


// module.exports = class Person {
//     constructor(name, age, meetups = [], id) {
//         this.name = name
//         this.age = age
//         this.meetups = meetups
//         this.id = id
//     }

//     // greet(person) {
//     //     console.log("Hello " + person.name + ", my name is " + this.name)
//     // }

//     // attend(meetup){
//     //     this.meetups = meetup.name
//     //     meetup.attendees.push(this)
//     // }

//     attend(meetup){
//         this.meetups.push(meetup)
//         meetup.attendees.push(this)
//     }

//     static create({ name,age,meetups,id }){
//         return new Person(name,age,meetups,id)
//     }
// }