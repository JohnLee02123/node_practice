// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // when you import a module you invoke it, that is why this require statement causes a console.log in the 7-mind-grenade
// console.log(names)

// console.log(data)

// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)