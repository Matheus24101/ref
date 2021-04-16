module.exports.roleCreateCommand = {
  channel: "$getServerVar[logroles]",
  code:
`
$description[Cargo Criado!
<@&$roleID[$newRole[name]]>]
$thumbnail[$userAvatar[$clientID]]
$author[$usertag[$clientID];$useravatar[$clientID]]
$color[8000FF]
$onlyIf[$getServerVar[logroles]!=;]
`
}