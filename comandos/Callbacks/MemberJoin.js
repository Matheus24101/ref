module.exports.joinCommand = {
  channel: "$getServerVar[joinchannel]",
  code: 
`
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinmsg];{user.mention};<@$authorID>];{user.tag};$userTag];{user.username};$username];{server.name};$serverName];{server.members};$membersCount]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$getServerVar[antibots]$isbot[$authorID]!=truetrue;{execute:banBot}]
`
}