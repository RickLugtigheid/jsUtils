let math = module.exports={
    randomFloat(min, max, decimals = 2){
        var random = Math.random()*(max-min) + min;
        var pow = Math.pow(10, decimals);
        return Math.floor(random*pow) / pow;
    }
}
math.Matrix = class{
    constructor(Matrix = {'size': [2, 2], 'rows':[], 'random': []}){
        this.settings = Matrix;
        this.Matrix = []

        //#region [init matrix]
        for(let r = 0; r < this.settings['size'][0]; r++){
            let row = [];
            
            for(let c = 0; c < this.settings['size'][1]; c++){
                try{
                    if(this.settings['rows'] != null){
                        if(this.settings['rows'][r][c] != null){
                            row.push(this.settings['rows'][r][c])
                        }else{
                            row.push(this.settings['rows'][0][0])
                        }
                    }else if(this.settings['random'] != null){
                        //row.push(Math.floor(Math.random() * this.settings['random']));
                        let  min = Math.ceil(this.settings['random'][0]), max = Math.floor(this.settings['random'][1])+1;
                        row.push(Math.floor(Math.random() * (max - min)) + min)
                    }else{
                        row.push(0);
                    }
                }catch{
                    row.push(0);
                }
            }
            this.Matrix.push(row)
        }
        //#endregion
    }
    Includes(value = 0){
        for(let r = 0; r < this.Matrix.length; r++){
            for(let c = 0; c < this.Matrix[r].length; c++){
                if(this.Matrix[r][c] == value){
                    return true;
                }
            }
        }
        return false;
    }
    forEach(callback = (value, row, column)=>{}){
        for(let r = 0; r < this.Matrix.length; r++){
            for(let c = 0; c < this.Matrix[r].length; c++){
                callback(this.Matrix[r][c], r, c)
            }
        }
    }
    Submatrix(newSize = []){
        //https://en.wikipedia.org/wiki/Matrix_(mathematics)#Submatrix
        let submatrix = this.Matrix;
        for(let r = 0; r < submatrix.length; r++){
            for(let c = 0; c < this.Matrix[r].length; c++){
                if(newSize[1] < c){
                    submatrix[r].splice(c-1)
                }
            }
            if(newSize[0] < r){
                submatrix.splice(r-1)
            }
        }
        return submatrix;
    }
    //math
    Add(Matrix = new math.Matrix()){
        //https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:adding-and-subtracting-matrices/v/matrix-addition-and-subtraction-1
        if(this.settings['size'][0] == Matrix.settings['size'][0] && this.settings['size'][1] == Matrix.settings['size'][1]){
            let rows = [];
            for(let r = 0; r < this.Matrix.length; r++){
                let row = [];
                for(let ac = 0; ac < this.Matrix[r].length; ac++){
                    let a = this.Matrix[r][ac]
                    let b = Matrix.Matrix[r][ac];
                    row.push(a+b)
                }
                rows.push(row)
            }
            this.Matrix = rows;
            return this.Matrix;
        }else{
            console.log("Error: Matrix sizes not equal!");
        }
    }
    Subtract(Matrix = new math.Matrix()){
        if(this.settings['size'][0] == Matrix.settings['size'][0] && this.settings['size'][1] == Matrix.settings['size'][1]){
            let rows = [];
            for(let r = 0; r < this.Matrix.length; r++){
                let row = [];
                for(let ac = 0; ac < this.Matrix[r].length; ac++){
                    let a = this.Matrix[r][ac]
                    let b = Matrix.Matrix[r][ac];
                    row.push(a-b)
                }
                rows.push(row)
            }
            this.Matrix = rows;
            return rows;
        }else{
            return "Error: Matrix sizes not equal!";
        }
    }
    Multiply(Matrix = new math.Matrix()){
        // https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro
        if(this.settings['size'][0] == Matrix.settings['size'][0] && this.settings['size'][1] == Matrix.settings['size'][1]){
            var aNumRows = this.Matrix.length, aNumCols = this.Matrix[0].length, bNumRows = Matrix.Matrix.length, bNumCols = Matrix.Matrix[0].length,
            newMatrix = new Array(aNumRows);  // initialize array of rows
            for (var r = 0; r < aNumRows; ++r) {
                newMatrix[r] = new Array(bNumCols); // initialize the current row
            for (var c = 0; c < bNumCols; ++c) {
                newMatrix[r][c] = 0;             // initialize the current cell
                for (var i = 0; i < aNumCols; ++i) {
                    newMatrix[r][c] += this.Matrix[r][i] * Matrix.Matrix[i][c];
                }
            }
        }
        return new math.Matrix({'size':this.settings['size'], 'rows':newMatrix});
        }else{
            return "Error: Matrix sizes not equal!"
        }
    }
    MultiplyScalar(Scalar = 2){
        let rows = [];
        for(let r = 0; r < this.Matrix.length; r++){
            let row = [];
            for(let ac = 0; ac < this.Matrix[r].length; ac++){
                let a = this.Matrix[r][ac]
                row.push(a * Scalar)
            }
            rows.push(row)
        }
        return new math.Matrix({'size':this.settings['size'], 'rows':rows});
    }
    DivideScalar(Scalar = 2){
        let rows = [];
        for(let r = 0; r < this.Matrix.length; r++){
            let row = [];
            for(let ac = 0; ac < this.Matrix[r].length; ac++){
                let a = this.Matrix[r][ac]
                row.push(a / Scalar)
            }
            rows.push(row)
        }
        return new math.Matrix({'size':this.settings['size'], 'rows':rows});
    }
    Transport(){
        let rows = []
        for(let c = 0; c < this.Matrix[0].length; c++){
            let row = []
            for(let r = 0; r < this.Matrix.length; r++){
                row.push(this.Matrix[r][c])
            }
            rows.push(row)
        }
        this.Matrix = rows;
    }
    toString(){return this.Matrix;}
}
math.Vector2 = class{
    constructor(x, y){
    this.x = x;
    this.y = y;
    }
    //misc functions
    
    Set(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){return JSON.stringify({x:this.x, y:this.y});}

    Equals(vector = new math.Vector2()){
        if(this.x == vector.x && this.y == vector.y){return true} return false;
    }

    Clone(){
        //returns a clone of itself
        return new math.Vector2(this.x, this.y)
    }

    Random(min = 0, max = .5){
        //set x and y to a random value between 0 and maxFromCurPo
        this.x = this.x + math.randomFloat(min, max, 3)
        this.y = this.y + math.randomFloat(min, max, 3)
    }

    //math functions 
    Add(vector = new math.Vector2()){
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
    }

    Subtract(vector = new math.Vector2()){
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
    }

    Scale(vector = new math.Vector2()){
        this.x = this.x * vector.x;
        this.y = this.y * vector.y;
        //return new math.Vector2(this.x * scalar, this.y * scalar);
    }

    Divide(vector = new math.Vector2()){
            this.x = this.x / vector.x;
            this.y = this.y / vector.y;
        }

    Magnitude(){ return Math.sqrt(this.x*this.x + this.y*this.y) }
    Normalize(){
        var m = this.Magnitude();
        return new math.Vector2(this.x /= m, this.y /= m)
    }
    Dot(vectorB = new math.Vector2(0, 0)){
        return (this.x*vectorB.x) + (this.y*vectorB.y);
    }
    Clamp(min = new math.Vector2(0, 0), max= new math.Vector2(1,1)){
        let x = this.x;
        x = (x > max.x) ? max.x : x;
        x = (x < min.x) ? min.x : x;

        let y = this.y;
        y = (y > max.y) ? max.y : y;
        y = (y < min.y) ? min.y : y;

        this.x = x;
        this.y = y;
        return  this;
    }

    Distance(vectorA = new math.Vector2(1, 0), vectorB = new math.Vector2(2, 0)){
        //get the distance btwn vector A and B  note:(a - b)
        return Math.sqrt( Math.pow((vectorA.x - vectorB.x), 2) + Math.pow((vectorA.y - vectorB.y), 2) );;
    }

    Angle(){
        return Math.atan2(this.x, this.y);
    }
}
//binary tree
var treeArr = null;
math.binaryTree = class{
    constructor(){
        this.root;
    }
    add(node){
        if(!node instanceof math.node){node = new math.node(node)}
        
        if(this.root == null){
            this.root = node
        }else{
            this.root.addNode(node);
        }
    }
    traverse(){treeArr = null; this.root.visit();}
    forEach(callback = (node = new math.node())=>{}){treeArr = null; this.root.visit(callback);}
    search(value){
        var found = this.root.search(value);
        return found;
    }
    includes(value){//if there is a node with he value
        var found = this.root.search(value);
        if(found != null){
            return true;
        }else{
            return false;
        }
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
            this.add(new math.node(node));
        });
    }
}
math.node = class{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    addNode(node = new math.node()){
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
    visit(callback = null){
        if (this.left != null) {
        this.left.visit(callback);
        }
        if (this.right != null) {
        this.right.visit(callback);
        }
        if(treeArr != null){
            treeArr.push(this.value)
        }else if(typeof callback == "function"){callback(this);}else{console.log(this.value);}
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