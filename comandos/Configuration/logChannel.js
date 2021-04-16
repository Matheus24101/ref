module.exports.command = {
  name: "log-canais", aliases: ['logs-canais', 'log-canal', 'logs-canal'],
  code:
`
  $setServerVar[logchannel;$mentionedChannels[1]]
  $description[<:1892_Toggle_on:827970917010636810> Agora os logs de canais atualizados serão enviados para <#$mentionedChannels[1]>]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$getServerVar[logchannel]!=$mentionedChannels[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Esse canal já está setado como logs de canais!}]

  $onlyIf[$mentionedChannels[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]log-channel (canal de logs para canais)\`}]

$onlyIf[$toLowerCase[$message]!=remove;{execute:logChannelRemove}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`ADMINISTRADOR\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}