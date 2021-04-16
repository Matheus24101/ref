module.exports.awaitedCommand = {
  name: "banido",
  code: 
`
$ban[$getUserVar[ban1]]
$setServerVar[reason;No reason]
$useChannel[$replaceText[+$getServerVar[logpunicao]+;++;$channelID]]

$author[$userTag[$clientID];$userAvatar[$clientID]]
$color[8000FF]
$description[<a:ban1:822184784561700904> **Usuário banido**
Usuário banido: $userTag[$getUserVar[ban1]] **( $getUserVar[ban1] )**
Banido por: <@$authorID> **( $authorID )**
Motivo: $replaceText[$replaceText[\`π$getServerVar[reason]π\`;ππ;Nenhum motivo definido];π;]]

$sendMessage[{description:<a:ban1:822184784561700904> **Usuario banido com sucesso!**
**Usuário banido:** $userTag[$getUserVar[ban1]]
**Banido por:** <@$authorID>
**Motivo:** $replaceText[$replaceText[\`π$getServerVar[reason]π\`;ππ;Motivo não definido];π;]} {color:8000FF} {author:$userTag:$authorAvatar} {delete:30s};no]
$deleteMessage[$getUserVar[a]]
$onlyIf[$getServerVar[ban]!=yes;{execute:bankk}]
$suppressErrors[]`
}