module.exports.command = {
  name: "unmute",
  code:
`
$takeRole[$mentioned[1];$roleID[Zanya Mute]]

$useChannel[$replaceText[$replaceText[*$getServerVar[logpunicao]*;**;$channelID];*;]]
$color[8000FF]
$author[$usertag;$authorAvatar]
$description[**Úsuario desmutado!**
**Úsuario desmutado por:** $userTag
**Úsuario desmutado:** $usertag[$mentioned[1]]
**Motivo:** \`$replaceText[$replaceText[$replaceText[+++$noMentionMessage+++;$message[1];];++++++;Nenhum Motivo definido];+++;]\`]

$sendDM[$mentioned[1];{description:**Você foi desmutado do servidor:** $serverName
**Motivo:** \`$replaceText[$replaceText[$replaceText[&&$noMentionMessage&&;$message[1];];&&&&;Nenhum Motivo];&&;]\`
**Desmutado por:** $username[$authorID]} {author:$userTag[$findUser[$message[1]]]:$userAvatar[$findUser[$message[1]]]}{color:8000FF}]

$sendMessage[{author:$usertag:$authoravatar}{color:8000FF}{description:<:success:823597185663893554> **Úsuario desmutado!**
**Motivo:** \`$replaceText[$replaceText[$replaceText[+++$noMentionMessage+++;$message[1];];++++++;Nenhum Motivo definido];+++;]\`} {delete:15s};no]

$onlyif[$hasRole[$mentioned[1];$roleid[Zanya Mute]]==true;{author:$usertag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O úsuario não está mutado!}]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]unmute (usuario) (motivo)\`}]

$onlyIf[$findRole[Zanya Mute]!=;{author:$userTag:$authorAvatar}{color:8000FF} {description:<:error:823299033011191808> O servidor não tem o cargo \`Zanya Mute\`, então eu criei ele para você} {execute:muteError}]

$onlyBotPerms[manageroles;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`GERENCIAR_CARGOS\`}]

$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`GERENCIAR_MENSAGENS\`} {color:#8000FF}]
`
}