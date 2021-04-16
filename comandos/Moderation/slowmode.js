module.exports.command = {
    name: "slowmode",
    code:
`
$if[$message[1]==reset]

$slowmode[$channelID;0s]
$description[<:success:823597185663893554> SlowMode resetado]
$color[8000FF]
$author[$usertag;$authoravatar]

$else

$slowmode[$channelID;$message]

$author[$usertag;$authoravatar]
$color[8000FF]
$description[<:success:823597185663893554> SlowMode mudado para \`$message\`]

$onlyIf[$checkContains[$message[1];0]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Não foi possível mudar o slowmode desse canal!}]
$onlyif[$checkContains[$message[1];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
$onlyIf[$djsEval[const ms = require('ms')
ms('$message');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]

$onlyIf[$message!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]slownmode (*tempo* / reset)\`!}]

$endif

$onlyBotPerms[managechannels;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`GERENCIAR_CANAIS\`}]

$onlyPerms[managechannels;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`GERENCIAR_CANAIS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$suppressErrors[{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Não foi possível mudar o slowmode desse canal!}]
`
}