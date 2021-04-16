module.exports.awaitedCommand = {
  name: "evoluiu",
  code:
`
$useChannel[$replaceText[$replaceText[&&$getServerVar[logevoluiu]&&;&&&&;$channelID];&&;]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[msgrank];{user.mention};<@$authorID>];{user.tag};$usertag];{user.username};$username];{level};$getUserVar[level]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[exp;0]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[rexp]<$getUserVar[exp];]
`
}