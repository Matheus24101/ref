module.exports.command = {
    name: "log-antilink", aliases: ['logs-antilink'],
    code:
  `
    $setServerVar[logantilink;$mentionedChannels[1]]
    $description[<:1892_Toggle_on:827970917010636810> Agora os logs de antilink serão enviados para <#$mentionedChannels[1]>]
    $color[8000FF]
    $author[$usertag;$authoravatar]
  
    $onlyIf[$getServerVar[logantilink]!=$mentionedChannels[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Esse canal já está setado como logs de antilink!}]
  
    $onlyIf[$mentionedChannels[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]log-antilink (canal de logs para antilink)\`}]
  
  $onlyIf[$toLowerCase[$message]!=remove;{execute:logAntilinkRemove}]
  
  $onlyPerms[admin;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`ADMINISTRADOR\`}]
  
  $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
  `
  }