var jsUtils = require("../lib/utils.js");

let vector = new jsUtils.Vector2(1, 0);
vector.Add(jsUtils.One)//One returns a vector of (1, 1)
console.log(vector)//output => 2, 1

console.log(vector.Magnitude())//returns the length of the vector
console.log(new jsUtils.Vector2(5, 200).Clamp(new jsUtils.Vector2(-1, 0), new jsUtils.Vector2(10,  15))) //Clamp lets you set a min and max value for the vector

if(vector.Equals(new jsUtils.Vector2(2, 1))){
    console.log(true)
}else{
    console.log(false)
}

console.log("[ERROR CHECKING]")
console.log("your vector is: "+jsUtils.One+"test")
vector.Set(2, 2)
vector.Subtract(new jsUtils.Vector2(2, 2))
console.log(vector);

var tree = jsUtils.treeFromArray([0, 10, -1, 80, 7, -90, 2, 3])
console.log(tree)
