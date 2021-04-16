module.exports.userUpdateCommand = {
  channel: "$getServerVar[loguser]",
  code:
`
$author[$usertag;$authoravatar]
$description[<@$authorID> Atualizou seu avatar!]
$thumbnail[$oldUser[avatar]]
$color[8000FF]
$onlyIf[$getServerVar[loguser]!=;]
`
}