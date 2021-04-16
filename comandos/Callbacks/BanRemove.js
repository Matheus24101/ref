module.exports.banRemoveCommand = {
  channel: "$getServerVar[logban]",
  code:
`
$description[**Úsuario desbanido!**
**Úsuario banido:** $usertag **( $authorID )**]
$author[$usertag;$authoravatar]
$color[8000FF]
$thumbnail[$authoravatar]
$onlyIf[$getServerVar[logban]!=;]
`
}