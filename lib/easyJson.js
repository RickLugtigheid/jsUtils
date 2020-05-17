//#region Copyright
//© Rick Lugtigheid
//#endregion
const fs = require('fs');
module.exports = class easyJson{
    constructor(path){
        if(typeof path != "string"){
            console.error("ERROR: path is not a string")
            return null;
        }else if(!path.includes(".json")){
            console.log("ERROR: "+path+" does not end with .json")
        }
        this.path = path; 
        if(!fs.existsSync(path)){
            console.error("Path doesn't exist,\nCreating new file...")
            this.json = {};
            this.save()
        }
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
    async save(options = {'as': this.path, 'resetBackup': true}){
        fs.writeFileSync(options['as'], JSON.stringify(this.json, null, 2), function (err) {
            if (err) return console.log(err);});

        if(options['resetBackup']){ this.backup = JSON.parse(JSON.stringify(this.json)) }
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