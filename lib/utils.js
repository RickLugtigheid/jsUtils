//#region Copyright
//© Rick Lugtigheid
//#endregion
//#region Imports
let math = require("./dataTypes")
//#endregion
let jsUtils = module.exports={
        //short notation new Vector2
        get Zero(){
            return new jsUtils.Vector2(0, 0);
        },
        get One(){
            return new jsUtils.Vector2(1, 1);
        },
        get UnitX(){
            return new jsUtils.Vector2(1, 0);
        },
        get UnitY(){
            return new jsUtils.Vector2(0, 1);
        },
        //short notation new binaryTree().fromArray(arr)
        treeFromArray(arr = []){
            var tree = new jsUtils.binaryTree()
            tree.fromArray(arr);
            return tree;
        },
        quickSort(arr = [], start = 0, end = 1){
            if (start >= end) {
                return "error:[start >= end]";
            }
            let index = partitionQS(arr, start, end);
            jsUtils.quickSort(arr, start, index - 1),
            jsUtils.quickSort(arr, index + 1, end)
        },
        getSubString(source="", start="", end=""){
            return source.substring(
                source.lastIndexOf(start) + 1, 
                source.lastIndexOf(end));
        },
        timeLoop(waitToNextLoop = 100, loops = 1, callback = {'loop': ()=>{}, 'end': ()=>{}}){
            var count = 0;
            var loop = setInterval(()=>{
                count++;
                callback['loop']();
                if(count >= loops){clearInterval(loop); if(callback['end']){callback['end']()}}
            }, waitToNextLoop)
        }
};
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
function swap(arr, a, b){
    //swaps point a and point b in the array
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
//math
jsUtils.Matrix = math.Matrix;
jsUtils.Vector2 = math.Vector2;
jsUtils.binaryTree = math.binaryTree;
jsUtils.node = math.node;
jsUtils.randomFloat = math.randomFloat;

//misc
jsUtils.process = require('./process')
jsUtils.easyJson = require('./easyJson')