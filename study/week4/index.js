const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    // res.send('Hello')
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, ()=> {
    console.log('Server listening')
})