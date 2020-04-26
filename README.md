# jsUtils

[![NPM version](https://badge.fury.io/js/canvas.svg)](1.0.0)

jsUtils is a module for [Node.js](http://nodejs.org).

## Installation

```bash
$ npm install js-utils
```

### Documentation
* [quicksort()](#quicksort)
* [getSubString()](#getSubString)
* [binaryTree()](#binaryTree)
* [timeLoop()](#timeLoop)


### quicksort()

Sorts an array (int or string) using the quicksort algorithm

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

The binary tree is a tree of nodes

new binaryTree():
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
//this function will vist every node in the tree
tree.traverse();
```

binaryTree().search(searchValue)
```js
//this function will search the tree for a node
//with the value that is given as the parameter
tree.search(0);
//this function will return null or the node that was found
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