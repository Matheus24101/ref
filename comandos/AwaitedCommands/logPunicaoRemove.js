module.exports.awaitedCommand = {
  name: "logPunicaoRemove",
  code:
`
$setServerVar[logpunicao;]
$sendMessage[{author:$userTag:$authorAvatar}{color:8000FF}{description:<:6338_Toggle_OFF:827970916658577441> Log Desativado!};no]

$onlyIf[$getServerVar[logpunicao]!=;{author:$userTag:$authorAvatar}{color:8000FF}{description:<:error:823299033011191808> O log já está desativado!}]
`
}