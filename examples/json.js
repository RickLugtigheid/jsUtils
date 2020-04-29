var jsUtils = require("../lib/utils.js");
//#region using readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//#endregion

const DB = new jsUtils.easyJson('examples/eJson.json');
console.log("welcome to "+DB.json.appName+"!\n")

//make an kind of commandline
commandline()
function commandline(){
    rl.question("type a command => ", function(cmd) {
        if(cmd == "add-user"){
            addUser();
        }else if(cmd == "clear"){
            //here we clear the database
            DB.clear()//we don't want to load an new db so we don't give an parameter
            console.log(DB)
            commandline()
        }else if(cmd == "save"){
        //save the new data to the data base
        DB.save()
        console.log('saved')
        commandline()
        }else{commandline()}
    })
}

function addUser(){
    //ask the user a questions with the readline module
    rl.question("What is your name ? ", function(name) {

        //now we check if the users already exists in the database
        if(!DB.json.users.includes(name)){
            console.log(DB.json.users.push(name));
            console.log(`\nwelcome ${name}`);
        }else{console.log("There is already a user with the name "+name)}
    
        //close our readline function
        rl.close();
        commandline()
    });
}

