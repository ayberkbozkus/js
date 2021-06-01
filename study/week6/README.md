 # Testing

 ## NodeJs Package list

 ```
 mkdir testing
 cd testing
 npm init
 open .
 npm i ava --save-dev
 npm run test

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
