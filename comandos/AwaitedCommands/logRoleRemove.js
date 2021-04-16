module.exports.awaitedCommand = {
  name: "logRoleRemove",
  code:
`
$setServerVar[logroles;]
$sendMessage[{author:$userTag:$authorAvatar}{color:8000FF}{description:<:6338_Toggle_OFF:827970916658577441> Log Desativado!};no]

$onlyIf[$getServerVar[logroles]!=;{author:$userTag:$authorAvatar}{color:8000FF}{description:<:error:823299033011191808> O log já está desativado!}]
`
}