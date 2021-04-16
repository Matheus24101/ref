module.exports.awaitedCommand = {
  name: "kick1",
  code:
`
$kick[$findUser[$message[1]]]
$author[$userTag;$authorAvatar]
$color[8000FF]
$description[<:success:823597185663893554> Usúario kikado com sucesso!
**Usúario kikado:** $username[$findUser[$message[1]]] **( $findUser[$message[1]] )**
**Kikado por:** <@$authorID> **( $authorID )**
**Motivo:** \`$replaceText[$replaceText[$replaceText[&$message&;$message[1];];&&;Motivo não definido!];&;]\`
]
$sendDM[$findUser[$message[1]];{description:**Você foi kickado do servidor:** $serverName
**Motivo:** $replaceText[$message;$message[1];]
**Kickado por:** $username[$authorID]} {author:$userTag[$findUser[$message[1]]]:$userAvatar[$findUser[$message[1]]]}{color:8000FF}]
$suppressErrors[]
`
}