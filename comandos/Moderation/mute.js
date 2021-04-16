module.exports.command = {
name: "mute",
code:
`
$takeRole[$mentioned[1];$roleID[Zanya Mute]]

$sendDM[$mentioned[1];{description:**Você foi desmutado do servidor:** $serverName
**Motivo:** \`Depois de muito tempo mutado... o úsuario aprendeu a falar novamente\`
**Desmutado por:** $username[$authorID]} {author:$userTag[$findUser[$message[2]]]:$userAvatar[$findUser[$message[2]]]}{color:8000FF}]

$useChannel[$replaceText[$replaceText[*$getServerVar[logpunicao]*;**;$channelID];*;]]
$color[8000FF]
$author[$usertag;$authorAvatar]
$description[**Usuário desmutado!**
**Usuário desmutado por:** $userTag[$clientID]
**Usuário desmutado:** $usertag[$mentioned[1]]
**Motivo:** \`Depois de muito tempo mutado... o usuário aprendeu a falar novamente\`]

$wait[$message[1]]

$giveRole[$mentioned[1];$roleID[Zanya Mute]]

$forEachGuildChannel[muteError2]

$sendDM[$mentioned[1];{description:**Você foi mutado no servidor:** $serverName
**Motivo:** \`$replaceText[$replaceText[$replaceText[&&$noMentionMessage&&;$message[1];];&&&&;Nenhum Motivo];&&;]\`
**Mutado por:** $username[$authorID]} {author:$userTag[$findUser[$message[1]]]:$userAvatar[$findUser[$message[1]]]}{color:8000FF}]

$channelSendMessage[$replaceText[$replaceText[*$getServerVar[logpunicao]*;**;$channelID];*;];{author:$userTag[$clientID]:$userAvatar[$clientID]} {color:8000FF} {description:**Úsuario mutado!**
**Úsuario mutado:** $userTag[$mentioned[1]]
**Mutado por:** $userTag[$authorID]
**Motivo:** \`$replaceText[$replaceText[$replaceText[&&$noMentionMessage&&;$message[1];];&&&&;Nenhum Motivo];&&;]\`};no]

$sendMessage[{description:<:success:823597185663893554> **<@$mentioned[1]> Mutado com sucesso!**
**Mutado por:** $userTag ( $authorID )
**Motivo:** \`$replaceText[$replaceText[$replaceText[&&$noMentionMessage&&;$message[1];];&&&&;Nenhum Motivo];&&;]\`}{color:8000FF}{author:$usertag:$authoravatar} {delete:30s};no]

$onlyIf[$hasRole[$mentioned[1];$roleID[Zanya Mute]]==false;{author:$userTag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O úsuario mencionado já está mutado!}]

$onlyif[$checkContains[$message[1];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
$onlyIf[$djsEval[const ms = require('ms')
ms('$message[1]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido na primeria mensagem! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]

$onlyIf[$rolePosition[$highestRole[$mentioned[1]]]!=$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$rolePosition[$highestRole[$mentioned[1]]]!=$rolePosition[$highestRole[$authorID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$mentioned[1]]]>$rolePosition[$highestRole[$authorID]];{description:<:error:823299033011191808> O usuário tem um cargo maior do que você!} {color:8000FF} {author:$userTag:$authorAvatar}]

$onlyIf[$rolePosition[$highestRole[$mentioned[1]]]>$rolePosition[$highestRole[$authorID]];{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$mentioned[1]]]>$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$mentioned[1]!=$ownerID;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu não consigo mutar o dono do servidor!}]

$onlyIf[$mentioned[1]!=$clientID;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Eu não posso me mutar!} {color:8000FF}]

$onlyIf[$mentioned[1]!=$authorID;{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não pode se mutar!}]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]mute (tempo de mute) (usuario) (motivo)\`}]

$onlyIf[$mentioned[1]!=$message[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]mute (tempo de mute) (usuario) (motivo)\`}]

$onlyIf[$message[1]!=$mentioned[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]mute (tempo de mute) (usuario) (motivo)\`}]

$onlyIf[$message[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]mute (tempo de mute) (usuario) (motivo)\`}]

$onlyIf[$findRole[Zanya Mute]!=;{author:$userTag:$authorAvatar}{color:8000FF} {description:<:error:823299033011191808> O servidor não tem o cargo \`Zanya Mute\`, então eu criei ele para você} {execute:muteError}]

$onlyBotPerms[manageroles;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`GERENCIAR_CARGOS\`}]

$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`GERENCIAR_MENSAGENS\`} {color:#8000FF}]
`
}