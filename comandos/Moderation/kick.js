module.exports.command = {
  name: "kick",
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

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]!=$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]!=$rolePosition[$highestRole[$authorID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$authorID]];{description:<:error:823299033011191808> O usuário tem um cargo maior do que você!} {color:8000FF} {author:$userTag:$authorAvatar}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$authorID]];{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$ownerID!=$authorID;{execute:kick1}]

$onlyIf[$findUser[$message[1]]!=$ownerID;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu não consigo kickar o dono do servidor!}]

$onlyIf[$findUser[$message[1]]!=$clientID;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Eu não posso me kickar!} {color:8000FF}]

$onlyIf[$findUser[$message[1]]!=$authorID;{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não pode se kickar!}]

$onlyIf[$findUser[$message[1];no]!=undefined;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Mencione alguem ou use um id válido!} {color:#8000FF}]

$onlyIf[$message[1]!=;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Mencione alguem ou use um id válido!} {color:#8000FF}]

$onlyBotPerms[kick;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`KIKAR_MEMBROS\`}]

$onlyPerms[kick;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`KIKAR_MEMBROS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$onlyBotPerms[embedlinks;Eu preciso da permissão de \`EMBED_LINKS\`]

$suppressErrors[]
`
}