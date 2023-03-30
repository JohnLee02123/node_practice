const path = require('path')

// console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt') // the first / is included, but the second / is removed by the join

console.log(filePath) 

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// we deal with all this because the application might run on different computers, so we must use
// system specific separators and dirnames and root paths