module.exports.command = {
  name: "log-usuario", aliases: ['logs-usuario', 'log-úsuario', 'logs-úsuario', 'log-usuário', 'log-usúario', 'logs-usuário', 'logs-usúario'],
  code:
`
  $setServerVar[loguser;$mentionedChannels[1]]
  $description[<:1892_Toggle_on:827970917010636810> Agora os logs de usuarios serão enviados para <#$mentionedChannels[1]>]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$getServerVar[loguser]!=$mentionedChannels[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Esse canal já está setado como logs de usuarios!}]

  $onlyIf[$mentionedChannels[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]log-usuario (canal de logs para usuarios)\`}]

$onlyIf[$toLowerCase[$message]!=remove;{execute:logUserRemove}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`ADMINISTRADOR\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}