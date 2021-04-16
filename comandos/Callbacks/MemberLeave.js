module.exports.leaveCommand = {
  channel: "$getServerVar[leavechannel]",
  code: 
`
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemsg];{user.mention};<@$authorID>];{user.tag};$userTag];{user.username};$username];{server.name};$serverName];{members.count};$membersCount]
$onlyIf[$isBot[$authorID]==false;]
`
}