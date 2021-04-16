module.exports.deletedCommand = {
  channel: "$getServerVar[logmessage]",
  code:
`
$description[Mensagem deletada em <#$channelUsed>: \`\`\`
$replaceText[$message;\`;]\`\`\`]
$color[8000FF]
$thumbnail[$userAvatar[$clientID]]
$author[$usertag[$clientID];$useravatar[$clientID]]
$onlyIf[$isBot==false;]
$onlyIf[$getServerVar[logmessage]!=;]
`
}