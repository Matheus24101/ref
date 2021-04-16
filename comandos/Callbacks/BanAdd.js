module.exports.banAddCommand = {
  channel: "$getServerVar[logban]",
  code:
`
$description[**Úsuario banido!**
**Úsuario banido:** $usertag **( $authorID )**]
$author[$usertag;$authoravatar]
$color[8000FF]
$thumbnail[$authoravatar]

$onlyIf[$getServerVar[logban]!=;]
`
}