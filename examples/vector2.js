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