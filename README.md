 # A meetup and person program

 ## NodeJs Package list

 ```
 npm i axios
 npm i body-parser 
 npm i chalk 
 npm i express 
 npm i flatted 
 npm i mongoose 
 npm i mongoose-autopopulate
 npm i pug 
 npm i nodemon

 ```

 ## Mongo DB with docker

 ``` docker run -d -p 27017:27017 -v ~/mongo:/data/db --name mymongo mongo:latest ```

 ## Start nodejs
 
 ``` nodemon ```

 ## Post Request List
 ``` 
 axios.post('/person', {name: {person-name(string)}, age: {person-age(int)}}).then(console.log) 
 axios.delete('/person/{personid(string)}').then(console.log)
 axios.post('/meetup', {name: {meetup-name(string)}, location: {meetup-location(string)}}).then(console.log)
 axios.delete('/meetup/{meetupid(string)}').then(console.log)
 axios.post('http://localhost:3000/person/{personid(string)}/meetups', { meetup: {meetupid(string)} }).then(console.log)
 ```
