//#region Copyright
//© Rick Lugtigheid
//#endregion
let exp = module.exports={};

exp.quickSort=function(arr, start, end, callback){
    if (start >= end) {
        return "error:[start >= end]";
    }
    if(callback!=null){callback(arr)}
    let index = partitionQS(arr, start, end);
    exp.quickSort(arr, start, index - 1),
    exp.quickSort(arr, index + 1, end)
}

function partitionQS(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end]
    for(let i = start; i < end; i++){
        if(arr[i] < pivotValue){
            //swap arr[i] and pivotValue in the array
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);

    //we need the index for the sorting
    return pivotIndex;
}

exp.Vector2 = class{
    constructor(x, y){
    this.x = x;
    this.y = y;
    //referance https://docs.unity3d.com/ScriptReference/Vector2.html

    //misc functions
        this.toString = function(){
            //returns its value as array
            return (`vector2(${this.x}, ${this.y})`);
        }
        this.clone = function(){
            //returns a clone of itself
            return new exp.Vector2(this.x, this.y)
        }

        this.set = function(x, y){
            this.x = x;
            this.y = y;
        }

        // this.moveTowards = function(vector, speed){
        //     // Linearly interpolates between vectors A and B by speed.
		//     // t = 0 returns A, t = 1 returns B
        //     speed = Math.min(speed, 1); // still allow negative speed
        //     console.log(vector);
        //     vector.subtract(this)
        //     var diff = vector;
        //     console.log(diff);
        //     return this.add(diff.Scale(speed));
        // }

        //math functions
        this.add = function(vector){
            this.x = this.x - vector.x;
            this.y = this.y - vector.y;
        }
        this.subtract = function(vector){
            this.x = this.x - vector.x;
            this.y = this.y - vector.y;
        }
        this.Scale = function(vector){
            this.x = this.x * vector.x;
            this.y = this.y * vector.y;
            //return new exp.Vector2(this.x * scalar, this.y * scalar);
        }
        this.Division = function(vector){
            this.x = this.x / vector.x;
            this.y = this.y / vector.y;
        }

        this.distance = function(vectorA, vectorB){
            //get the distance btwn vector A and B  note:(a - b)
            return Math.sqrt( Math.pow((vectorA.x - vectorB.x), 2) + Math.pow((vectorA.y - vectorB.y), 2) );;
        }
        this.angle = function(){
            return Math.atan2(this.x, this.y);
        }
    }
}
//binary tree
var treeArr = null;
exp.binaryTree = class{
    constructor(){
        this.root;
    }
    add(node){
        if(this.root == null){
            this.root = node;
        }else{
            this.root.addNode(node);
        }
    }
    traverse(){treeArr = null; this.root.visit();}

    search(value){
        var found = this.root.search(value);
        return found;
    }
    toArray(){
        treeArr = []
        this.root.visit();
        //make sure to also reset the treeArr variable
        const dummy = treeArr;
        treeArr = null;
        return dummy;
    }
    fromArray(array){
        array.forEach(node => {
            this.add(new exp.node(node));
        });
    }
}
exp.node = class{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    addNode(node){
        //string checking
        var nVal = node.value;
        var oVal = this.value;

        if(typeof node.value == "string"){
            nVal = node.value[0].charCodeAt(0) - 97
        }
        if(typeof this.value == "string"){
            oVal = this.value[0].charCodeAt(0) - 97
        }
        //compare the numbers
        if(nVal < oVal){
            if(this.left == null){
                this.left = node;
            }else{
                this.left.addNode(node);
            }
            //so no equal values can be added
        }else if(nVal > oVal){
            if(this.right == null){
                this.right = node;
            }else{
                this.right.addNode(node);
            }
        }
    }
    visit(){
        if (this.left != null) {
        this.left.visit();
        }
        if (this.right != null) {
        this.right.visit();
        }
        if(treeArr != null){
            treeArr.push(this.value)
        }else{console.log(this.value);}
    }
    search(value){
        if(typeof value == "string"){
            value = value[0].charCodeAt(0) - 97
        }

        if(this.value == value){
            return this;
        }else if(value < this.value && this.left != null){
            return this.left.search(value);
        }else if(value > this.value && this.right != null){
            return this.right.search(value);
        }
        return null;
    }
}

//Misc Functions
exp.getSubString = function(source, start, end){
    return source.substring(
        source.lastIndexOf(start) + 1, 
        source.lastIndexOf(end));
}
exp.timeLoop = function(waitToNextLoop, loops, callback, onEnd){
    var count = 0;
    var loop = setInterval(()=>{
        count++;
        callback();
        if(count >= loops){clearInterval(loop); if(onEnd != null){onEnd()}}
    }, waitToNextLoop)
};
const fs = require('fs');
exp.easyJson = class{
    constructor(path){
        if(typeof path != "string"){
            console.error("ERROR: path is not a string")
            return null;
        }else if(!fs.existsSync(path)){
            console.error("ERROR: path doesn't exist")
            return null;
        }
        this.path = path;
        //read the json file
        try{
            this.json = JSON.parse(fs.readFileSync(this.path, "utf8"));
        }catch(err){
            this.json = {}
            console.log(err)
        }
        this.backup = JSON.parse(JSON.stringify(this.json))//makes it so it doesn't update with .json
    }
    makeBackup(){
        this.backup = JSON.parse(JSON.stringify(this.json))//makes it so it doesn't update with .json
    }
    save(){
        fs.writeFile(this.path, JSON.stringify(this.json, null, 2), function (err) {
            if (err) return console.log(err);});
        this.backup = this.json;
    }
    saveBackup(){
        fs.writeFile('backup.json', JSON.stringify(this.backup, null, 2), function (err) {
            if (err) return console.log(err);});
    }
    clear(newPath){
        if(newPath != null){
            this.path = newPath;
            this.json = JSON.parse(fs.readFileSync(this.path, "utf8"))
        }else{
            this.json = {};
        }
        this.makeBackup()
    }
}
function swap(arr, a, b){
    //swaps point a and point b in the array
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}