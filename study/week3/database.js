const fs = require('fs')

const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
    // fs.writeFile(filename, JSON.stringify(data))
}

const load = function(filename/*, handler*/) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
    // fs.readFile(filename, 'utf8', (err, file) => {
    //     if (err) {
    //         console.log('there is a read error', err)
    //         handler(err)
    //         return
    //     }
    //     else {
    //         handler(err, JSON.parse(file));
    //     }  
    // })
}

module.exports = { save, load }