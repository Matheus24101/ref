module.exports.command = {
  name: "unlock",
  code: 
`
$deletecommand
$deletein[5s]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$description[🔓 <#$$channelID> Foi destrancado com sucesso!]
$author[$userTag;$authorAvatar]
$color[8000FF]
$onlyBotPerms[managechannels;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Eu não tenho permissões suficientes, eu preciso da permissão de \`MODIFICAR_CANAIS\`} {color:8000FF}]
$onlyPerms[managechannels;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`MODIFICAR_CANAIS\`} {color:8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}