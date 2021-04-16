module.exports.command = {
  name: "reminder",
  code:
`
🔔 Reminder! <@$authorID>, \`$replaceText[$replaceText[$message;$message[1] ;];\`;]\`

$wait[$message[1]]

$sendMessage[{description:🔔 Irei te avisar em \`$message[1]\`!}{author:$usertag:$authoravatar}{color:8000FF};no]

$onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um mensagem para eu te lembrar!}]
$onlyif[$checkContains[$message[1];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
$onlyIf[$djsEval[const ms = require('ms')
ms('$message[1]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
$onlyIf[$message[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um tempo!}]
$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}