module.exports.command = {
  name: "leave-message", aliases: ['leave-msg'],
  code:
`

$setServerVar[leavemsg;$message]
$description[<:success:823597185663893554> **Mensagem de Saída mudada para:** \`\`\`
$message\`\`\`
Caso queira testar, use \`$getServerVar[prefixo]leave-test\`]
$author[$userTag;$authorAvatar]
$color[8000FF]

$onlyIf[$message!=;{execute:joinError}]
$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`DELETAR_MENSAGENS\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}