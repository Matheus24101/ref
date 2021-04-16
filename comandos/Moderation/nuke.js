module.exports.command = {
  name: "nuke",
  code:
`
$deleteChannels[$channelID]

$wait[1s]

$channelSendMessage[$channelID;{author:$usertag:$authoravatar}{description:<:nuke:830199319939383296> Canal Nukado!}{color:8000FF}{delete:15s}]
$cloneChannel[$channelID]

$onlyBotPerms[managechannels;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`GERENCIAR_CANAIS\`}]

$onlyPerms[managechannels;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`GERENCIAR_CANAIS\`} {color:#8000FF}]
`
}