module.exports.channelCreateCommand = {
  channel: "$getServerVar[logchannel]",
  code:
`
$description[**Canal Criado!**
Nome do canal: \`$newChannel[name]\`]
$author[$userTag[$clientID];$userAvatar[$clientID]]
$color[8000FF]
$thumbnail[$userAvatar[$clientID]]
$onlyIf[$getServerVar[logchannel]!=;]
`
}