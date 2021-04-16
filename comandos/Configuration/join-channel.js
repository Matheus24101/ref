module.exports.command = {
  name: "join-channel", aliases: ['wel-channel'],
  code:
`
$setServerVar[joinchannel;$findChannel[$message]]
$description[<:success:823597185663893554> Canal de Bem Vindo setado para: <#$findChannel[$message]>]
$color[8000FF]
$author[$userTag;$authorAvatar]

$onlyIf[$findChannel[$message;no]!=undefined;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> mencione ou use o id de um canal!}]
$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`DELETAR_MENSAGENS\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}