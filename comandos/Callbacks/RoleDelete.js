module.exports.roleDeleteCommand = {
  channel: "$getServerVar[logroles]",
  code:
`
$description[Cargo Deletado!
Cargo deletado: \`$oldRole[name]\`]
$thumbnail[$userAvatar[$clientID]]
$author[$usertag[$clientID];$useravatar[$clientID]]
$color[8000FF]
$onlyIf[$getServerVar[logroles]!=;]
`
}