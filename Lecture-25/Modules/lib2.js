const lib1 = require('./lib1');

console.log("Running lib2");

function subtract(a,b){
    return a-b;
}

module.exports.subtract = subtract;
module.exports.lib1 = lib1;



















// module.exports = {
//     subtract,
//     lib1
// }