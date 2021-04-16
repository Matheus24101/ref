module.exports.channelDeleteCommand = {
  channel: "$getServerVar[logchannel]",
  code:
`
$author[$userTag[$clientID];$userAvatar[$clientID]]
$description[**Canal Deletado!**
Nome do canal: \`$oldChannel[name]\`]
$color[8000FF]
$thumbnail[$userAvatar[$clientID]]
$onlyIf[$getServerVar[logchannel]!=;]
`
}