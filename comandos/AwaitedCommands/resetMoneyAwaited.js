module.exports.awaitedCommand = {
  name: "resetmoney",
  code:
`
$setUserVar[banl;0;$getVar[l]]
$setUserVar[money;0;$getVar[l]]
$description[Coins resetados de <@$getVar[l]>!]
$author[$usertag;$authoravatar]
$color[8000FF]
$deleteMessage[$getServerVar[l]]
`
}