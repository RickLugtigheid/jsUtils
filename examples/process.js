var jsUtils = require("../lib/utils.js");

let proc = new jsUtils.process({'type': 'powershell', 'code':[
    "echo TEST",
    "pause"
]});
proc.Start({'data': (data) => {
    console.log('data : '+ data)
},'close': () => {
    console.log('Closed')
}})

//run a File
// let procFromFile = new jsUtils.process({'type': 'python', 'useFile': true, 'path':__dirname+'/fileName'})

// procFromFile.start({'data': (data) => {
//     console.log(data)
// }})