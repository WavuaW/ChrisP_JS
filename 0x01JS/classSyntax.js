// var spaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// var zeus = new spaceShuttle('Jupiter');

// console.log(zeus.targetPlanet)
// THIS IS AN EXAMPLE OF USING A NEW KEYWORD WITH A CONSTRUCTOR FUNCTION.

class spaceShuttle {
constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
}
var zeus = new spaceShuttle('Jupiter');

console.log(zeus.targetPlanet)