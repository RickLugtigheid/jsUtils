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
console.log("==============================")
//Matrix
// let mat1 = new jsUtils.Matrix({'size': [32, 32]});

// let mat2 = new jsUtils.Matrix({'size': [2, 2], 'rows': [[50, 5], [100, -100]]});
// console.log(mat2.Matrix)

// console.log(mat1.Add(mat2))

let multiply = new jsUtils.Matrix({'size': [2, 2], 'rows':[[8, 9], [5, -1]]})

let muliBy = new jsUtils.Matrix({'size': [2, 2], 'rows':[[-2, 3], [4, 0]]})

console.log(multiply.Multiply(muliBy));

// muliBy.forEach((value, c, r)=>{
//     console.log(value);
// });
//adds 2 matrices to each other
let matrix = new jsUtils.Matrix({'size': [2, 2], 'rows':[[2, -1], [7, 5], [0, 9]]})

matrix.forEach((row, r, c) => {
    //both have the same output
    console.log(row)
    console.log(matrix.Matrix[r][c])
})