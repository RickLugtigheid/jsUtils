# jsUtils

jsUtils is a module for [Node.js](http://nodejs.org).

## Installation

```bash
$ npm install js-utils
```

### Documentation
* [quicksort()](#quicksort)
* [getSubString()](#getSubString)
* [binaryTree()](#binaryTree)
* [Vector2()](#Vector2)
* [timeLoop()](#timeLoop)


### quicksort()

Sorts an array (int or string) using the [quicksort algorithm](https://nl.wikipedia.org/wiki/Quicksort)

```js
const jsUtils = require('js-utils')
var array = [30, 8, 900, 700, 10, 32]
jsUtils.quickSort(array , 0, array.length-1)
console.log(array);//Output: [8, 10, 30, 32, 700,900]
```

### getSubString()

returns a substring

```js
const jsUtils = require('js-utils')
var string = "my name is [Rick]";
console.log(jsUtils.getSubString(string, '[', ']')); //Output: Rick
```

### binaryTree()

A [binary tree](https://en.wikipedia.org/wiki/Binary_tree) is a tree of nodes
with all nodes having a right and left child

new binaryTree()
```js
const jsUtils = require('js-utils')
let tree = new jsUtils.binaryTree();
```

binaryTree().add(node)
```js
//adding a node. The first node you add is the root node
tree.add(new jsUtils.node(0))

//node value < root value
//so this node will be the right child of the tree
tree.add(new jsUtils.node(-1))

//node value < root value
//so this node will be the left child of the tree
tree.add(new jsUtils.node(1))
```

binaryTree().traverse()
```js
//this function will visit every node in the tree
tree.traverse();
```

binaryTree().search(searchValue)
```js
//this function will search the tree for a node
//with the value that is given as the parameter
tree.search(0);
//this function will return null or the node that was found
```

### Vector2()

A Vector2 is a representation of 2D vectors and points.

new Vector2()
```js
const jsUtils = require('js-utils')
var x = 5, y = 10
let vector = new jsUtils.Vector2(x, y);
```

Vector2().toString()
```js
console.log(vector.toString()); //Output: vector2(5, 10)
```

Vector2().set(x, y)
```js
//lets you set the x and y values of an Vector2
vector.set(10, 20);
console.log(vector.toString()); //Output: vector2(10, 20)
```

Vector2().clone()
```js
//makes a clone of a Vector2
var clone = vector.clone();
console.log(clone.toString()); //Output: vector2(10, 20)
```

[Vector2 Math]

Vector2().add(vector2)
```js
//this is basicly: vector.y + otherVector.y
//and vector.x + otherVector.x
var add = new jsUtils.Vector2(5, 5).add(new jsUtils.Vector2(5, 5));
console.log(add.toString()); //Output: vector2(10, 10)
```

Vector2().subtract(vector2)
```js
//this is basicly: vector.y - otherVector.y
//and vector.x - otherVector.x
var sub = new jsUtils.Vector2(5, 10).subtract(new jsUtils.Vector2(5, 5));
console.log(sub.toString()); //Output: vector2(0, 5)
```

Vector2().Scale(vector2)
```js
//this is basicly: vector.y * otherVector.y
//and vector.x * otherVector.x
var scale = new jsUtils.Vector2(2, 5).Scale(new jsUtils.Vector2(6, 2));
console.log(scale.toString()); //Output: vector2(12, 10)
```

Vector2().Division(vector2)
```js
//this is basicly: vector.y / otherVector.y
//and vector.x / otherVector.x
var div = new jsUtils.Vector2(8, 12).Division(new jsUtils.Vector2(2, 2));
console.log(div.toString()); //Output: vector2(4, 6)
```

Vector2().angle()
```js
//calculate the angle between the y and x values of the vector in degrees
var angle = new Vector2(1, 5).angle();
console.log(angle); //Output: 1,37.....ect note: the angle is in degrees
```

### timeLoop()

lets you loop every ...seconds for ...times

```js
const jsUtils = require('js-utils')

const waitTime = 100;//so every 100 milliseconds
const timesToLoop = 3;//so will loop 3 times

jsUtils.timeLoop(waitTime, timesToLoop, ()=>{
   //put the code you want to execute every loop here
}, ()=>{
   //put the code you want to execute when the loop ends
   //this callback is not necessary
})
```