module.exports.command = {
  name: "set-moneysymbol",
  code:
`
$setServerVar[ms;$message]

$description[$message **|** Simbolo mudado para $message!]
$author[$usertag;$authoravatar]
$color[8000FF]

$onlyIf[$isEmoji[$message]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um emoji valido!}]
$onlyIf[$message!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um emoji para virar o simbolo do coin}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`ADMINISTRADOR\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}