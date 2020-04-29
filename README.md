# jsUtils

jsUtils is a module for [Node.js](http://nodejs.org).

## Installation

```bash
$ npm i @rick_lugtigheid/js_utils
```

### Documentation
* [getSubString()](#getSubString)
* [timeLoop()](#timeLoop)
* [quicksort()](#quicksort)
* [easyJson()](#easyJson)
* [binaryTree()](#binaryTree)
* [Vector2()](#Vector2)


### getSubString()

returns a substring

```js
const jsUtils = require('@rick_lugtigheid/js_utils')
var string = "my name is [Rick]";
console.log(jsUtils.getSubString(string, '[', ']')); //Output: Rick
```
----

### timeLoop()

lets you loop every ...seconds for ...times

```js
const jsUtils = require('@rick_lugtigheid/js_utils')

const waitTime = 100;//so every 100 milliseconds
const timesToLoop = 3;//so will loop 3 times

jsUtils.timeLoop(waitTime, timesToLoop, ()=>{
   //put the code you want to execute every loop here
}, ()=>{
   //put the code you want to execute when the loop ends
   //this callback is not necessary
})
```
----

### quicksort()

Sorts an array (int or string) using the [quicksort algorithm](https://nl.wikipedia.org/wiki/Quicksort)

```js
const jsUtils = require('@rick_lugtigheid/js_utils')
var array = [30, 8, 900, 700, 10, 32]
jsUtils.quickSort(array , 0, array.length-1)
console.log(array);//Output: [8, 10, 30, 32, 700,900]
```
----

### easyJson()

easy for manipulating json files

new easyJson()
```js
const jsUtils = require('@rick_lugtigheid/js_utils')

const DB = new jsUtils.easyJson('./filename.json');//the parameter is the path where your json file is
```
for context here is the jsonfile I will be using for the documentation
```json
{
    "name": "name here",
    "Hobbies": ["footbal", "programming"],
    "misc": {"age": 32}
}
```

easyJson().json
```js
//the .json var is the json object of the file
console.log(DB.json)//Output: { "name": "name here", "Hobbies": ["footbal", "programming"], "misc": {"age": 32}}
console.log(DB.json.Hobbies)//Output: ["footbal", "programming"]
console.log(DB.json.misc.age)//Output: 32

//you can also change values / add to values
DB.json.Hobbies.push("playing video games")//we can use push because it is an array
console.log(DB.json.Hobbies)//Output: ["footbal", "programming", "playing video games"]

DB.json.name = "James";
console.log(DB.json.name)//Output: James

//we can also create new keys
DB.json.newKey = "this is a new key";
console.log(DB.json)//Output: { "name": "name here", "Hobbies": ["footbal", "programming"], "misc": {"age": 32}, "newKey": "this is a new key"}
```

easyJson().makeBackup()
```js
//updates the backup, so sets backup to the .json var
DB.json.name = "backupName";
console.log(DB.backup.name)//Output: name here
DB.makeBackup()
console.log(DB.backup.name)//Output: backupName
```

easyJson().save()
```js
//saves the .json back into the file
//also updates the .backup 
DB.save()
```

easyJson().saveBackup()
```js
//saves the backup data into a file named backup.json
//this can be handy if you exedently did something to the main jsonfile
DB.saveBackup()
```
easyJson().clear(newPath)
```js
//clears the object
DB.clear()//without the parameter it will just clear the object
DB.clear("other.json")//with parameter it will clear and reset the object with a new file
```
----

### binaryTree()

A [binary tree](https://en.wikipedia.org/wiki/Binary_tree) is a tree of nodes
with all nodes having a right and left child

new binaryTree()
```js
const jsUtils = require('@rick_lugtigheid/js_utils')
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

binaryTree().toArray()
```js
//this function will visit every node in the tree
//and put its value in an array
tree.add(new jsUtils.node(0))
tree.add(new jsUtils.node(-1))
tree.add(new jsUtils.node(1))

console.log(tree.toArray()); //Output: [ -1, 1, 0]
```

binaryTree().fromArray()
```js
//this function will add the content of an array to the tree
var toArr = [ -1, 1, 0];//we can reverse the .toArray function
tree.fromArray(toArr);
tree.traverse(); //Output: -1 1 0
```

binaryTree().search(searchValue)
```js
//this function will search the tree for a node
//with the value that is given as the parameter
tree.search(0);
//this function will return null or the node that was found
```
----

### Vector2()

A Vector2 is a representation of 2D vectors and points.

new Vector2()
```js
const jsUtils = require('@rick_lugtigheid/js_utils')
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
----

### Version Log
   [v1.0.1]
   added:
      [easyJson()](#easyJson)
      [binaryTree()](#binaryTree).toArray()
      [binaryTree()](#binaryTree).fromArray()

----