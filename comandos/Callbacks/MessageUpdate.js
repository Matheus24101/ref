module.exports.updateCommand = {
  channel: "$getServerVar[logmessage]",
  code:
`
$description[Mensagem atualizada em <#$channelUsed>: \`\`\`
$oldMessage\`\`\`
Nova Mensagem: \`\`\`
$replaceText[$message;\`\`\`;]\`\`\`]
$color[8000FF]
$thumbnail[$userAvatar[$clientID]]
$author[$usertag[$clientID];$useravatar[$clientID]]
$onlyIf[$getServerVar[logmessage]!=;]
$onlyIf[$isBot==false;]
`
}