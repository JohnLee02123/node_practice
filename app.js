// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename> // i stands for install

// global dependency - use it in any project
// npm install -g <packagename>
// sudo install -g <packagename> (mac)

// package.json - manifest file (stores imporant info about project/package)
// manual approach (create package.json in the root, create properties)
// npm init (step by step)
// npm init -y (this is just better, change the package.json file later)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)