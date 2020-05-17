//#region Copyright
//© Rick Lugtigheid
//#endregion
module.exports = class process{
    constructor(settings = {'type': '', useFile: false, 'path': '', 'code':[]}){
        this.settings = settings
    }
    async Start(callback = {'data': (data)=>{}, 'close': ()=>{}}){
        //#region Includes
        const { spawn, exec } = require("child_process")
        const fsp = require('fs').promises
        //#endregion

        let path, extention, process, start;
        switch(this.settings['type']){
            case "powershell":
                extention = '.ps1'
                start = () => {return exec('cmd /c start powershell "'+path+'.ps1')};
                break;
            case "python":
                extention = '.py'
                start = () => {return spawn('python', [path+'.py'])};
                break;
            case 'vbscript':
                extention = '.vbs'
                start = () => {return spawn('cscript.exe', [path+'.vbs'])};
                break;
            default:                   
                return console.error("Type "+this.type+" invalid");
        }
        if(this.settings['useFile']){
            path = this.settings['path']
        }else{
            path = __dirname.replace('\\lib', '\\temp')
            await fsp.writeFile('temp'+extention, this.settings['code'].toString().replace(/,/g, '\n'))
        }
        //now start the process
        process = start()
        //listn to the process
        process.stdout.on('data', (data) => {
            var id = data.toString().replace(/(\r\n|\n|\r)/gm,"");
            callback['data'](id);
        })
        process.stdout.on('close', () => {
            if(callback['close']){callback['close']()}
            //delete the temp file
            if(!this.settings['useFile']){
                fsp.unlink('temp'+extention,(err) =>{
                    if(err){console.log(err)}
                })
            }
        })
    }
}