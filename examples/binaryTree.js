var jsUtils = require("../lib/utils.js");

let tree = new jsUtils.binaryTree();

//add the root node and give it the value 0
tree.add(new jsUtils.node(0));

//Lets add 100 nodes to the tree
for(var i =0; i < 100; i++){
    tree.add(new jsUtils.node(Math.floor(Math.random() * (-50, 50))));//adds a node with a value between -50 and 50
}
//show all nodes from root
tree.traverse();

//check if we have a node with the value -10 - 10
for(var i =-10; i < 10; i++){
    var search = tree.search(i);
    if(search){
        console.log("Node "+i+" FOUND:\n");
        console.log(search);
    }else{
        console.log("No node with the value"+i+" found")
    }
} 
const treeArray = tree.toArray()//if you wan't to convert the tree to an array you can
console.log(treeArray)//lets take a look at the array

jsUtils.quickSort(treeArray, 0, treeArray.length-1)//and lets also sort the array because it looks a bit messy
console.log(treeArray)//lets take a look at the array

//if we want we can load this array back into a tree
let treeFromArray = new jsUtils.binaryTree();
treeFromArray.fromArray(treeArray)
//or
const treeArraySN = jsUtils.treeFromArray(treeArray)

treeFromArray.traverse()