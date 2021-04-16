
require('express')().get('/', function(request, response) {
response.sendFile(__dirname + '/index.html')
}).listen(process.env.PORT)

const dbd = require('dbd.js');
const nathroc = new dbd.Bot({
        prefix: "$getServerVar[prefixo]",
        token: "ODIxNDMxNDY3MzEyODA3OTk3.YFDnqw.HMh4AJiuHGksjDka-gNnzpvdie0",
});


nathroc.onMessage(); 

const fs = require('fs');

let dir = fs.readdirSync('./comandos/');
let i = 0;

handler: while (i < dir.length) {
    const stat = fs.statSync('./comandos/' + dir[i]);

    if (stat.isDirectory()) {
        const readdir = fs.readdirSync('./comandos/' + dir[i]);

        let nums = 0;
        while (nums < readdir.length) {
            dir.push(dir[i] + '/' + readdir[nums]);
            nums++;
        }
        i++;
        continue handler;
    } else if (stat.isFile()) {
        const command = require('./comandos/' + dir[i]);
        try {
           nathroc[Object.keys(command)[0]](command[Object.keys(command)[0]]);
            i++;
            continue handler;
        } catch (err) {
            console.error(err.message);
            delete dir[i];

            continue handler;
        }
    } else {
        console.error('O diretório não era uma pasta ou arquivo.');
        delete dir[i];

        continue handler;
    }
}

nathroc.command({
name: '$alwaysExecute',
code: `
$onlyIf[$checkContains[$message;https://;discord.gg/;http://]==false;{execute:antilink}]

$onlyIf[$getUserVar[antilink]==off;]
$onlyIf[$getServerVar[antilink]==on;] 
$onlyIf[$getChannelVar[antilink]==off;]
`
})

nathroc.onJoined()
nathroc.onLeave()

nathroc.onBanAdd()
nathroc.onBanRemove()

nathroc.onChannelDelete()
nathroc.onChannelCreate()
nathroc.onChannelUpdate()

nathroc.onMessageUpdate()
nathroc.onMessageDelete()

nathroc.onRoleCreate()
nathroc.onRoleDelete()
nathroc.onRoleUpdate()

nathroc.onUserUpdate()