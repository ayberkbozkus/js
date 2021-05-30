const fs = require('fs')

const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
    // fs.writeFile(filename, JSON.stringify(data))
}

const load = function(filename/*, handler*/) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
    
}

module.exports = { save, load }