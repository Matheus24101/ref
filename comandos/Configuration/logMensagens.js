module.exports.command = {
  name: "log-mensagens", aliases: ['logs-mensagens', 'log-mensagem', 'logs-mensagem'],
  code:
`
$setServerVar[logmessage;$mentionedChannels[1]]
  $description[<:1892_Toggle_on:827970917010636810> Agora os logs de mensagens atualizados serão enviados para <#$mentionedChannels[1]>]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$getServerVar[logmessage]!=$mentionedChannels[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Esse canal já está setado como logs de mensagens!}]

  $onlyIf[$mentionedChannels[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]log-mensagens (canal de logs para mensagens)\`}]

$onlyIf[$toLowerCase[$message]!=remove;{execute:logMessageRemove}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`ADMINISTRADOR\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}