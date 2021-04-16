module.exports.command = {
  name: "clear",
  usage: "z!clear (messages)",
  description: "delete messages",
  code: 
`
$clear[$message[1]]

$deleteIn[5s]
$deletecommand
$author[$userTag;$authorAvatar]
$description[🗑️ **$message[1]** Mensagens foram deletadas]
$color[8000FF]

$onlyIf[$message[1]<101;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Coloque um número menor do que 100!}]

$onlyIf[$message[1]>1;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Coloque um número maior que 1!}]
$onlyIf[$isNumber[$message[1]]!=false;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Coloque um número valido!} {color:#8000FF}]


$onlyIf[$message[1]!=;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Coloque o tanto de mensagens que você quer deletar!} {color:#8000FF}]

$onlyBotPerms[managemessages;{author:$userTag:$authorAvatar} {color:#8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`DELETAR_MENSAGENS\`}]

$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`DELETAR_MENSAGENS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$onlyBotPerms[embedlinks;Eu preciso da permissão de \`EMBED_LINKS\`]`
}