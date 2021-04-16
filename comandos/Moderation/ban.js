module.exports.command = {
  name: "ban",
  usage: "z!ban (@user) (reason)",
  description: "ban user",
  code: 
`
$setUserVar[a;$splitText[1]]
$reactionCollector[$splitText[1];$authorID;10m;<:success:823597185663893554>;banido;no]

$textSplit[$sendMessage[{author:$userTag:$authorAvatar} {description:**Você deseja realmente banir o **$username[$findUser[$message[1]]]**? isso é uma ação irreversível <:cuteWeep:822857179786379305>  **

Caso você queira desativar essa confirmação use \`$getServerVar[prefixo]ban-confirmation off\`} {color:8000FF};yes];no; ]
$setUserVar[ban1;$findUser[$message[1]]]
$replaceText[$setServerVar[reason;$noMentionMessage];$findUser[$message[1]];]

$onlyIf[$getServerVar[ban]!=yes;{execute:banido}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]!=$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]!=$rolePosition[$highestRole[$authorID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$authorID]];{description:<:error:823299033011191808> O usuário tem um cargo maior do que você!} {color:8000FF} {author:$userTag:$authorAvatar}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$authorID]];{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> O usuário tem um cargo maior do que você!}]

$onlyIf[$rolePosition[$highestRole[$findUser[$message[1];no]]]>$rolePosition[$highestRole[$clientID]];{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Cheque a posição do meu cargo!}]

$onlyIf[$findMember[$findUser[$message[1]]]==true;{execute:ban1}]
$onlyIf[$ownerID!=$authorID;{execute:ban1}]

$onlyIf[$isBanned[$findUser[$message[1]]]!=true;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O usuário já está bandido desse servidor!}]

$onlyIf[$findUser[$message[1]]!=$ownerID;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu não consigo banir o dono do servidor!}]

$onlyIf[$findUser[$message[1]]!=$clientID;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Eu não posso me banir!} {color:8000FF}]

$onlyIf[$findUser[$message[1]]!=$authorID;{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não pode se banir!}]

$onlyIf[$findUser[$message[1];no]!=undefined;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Mencione alguem ou use um id válido!} {color:#8000FF}]

$onlyIf[$message[1]!=;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Mencione alguem ou use um id válido!} {color:#8000FF}]

$onlyBotPerms[ban;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`BANIR_MEMBROS\`}]

$onlyBotPerms[addreactions;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`ADD_REACTIONS\`}]

$onlyPerms[ban;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`BANIR_MEMBROS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$onlyBotPerms[embedlinks; Eu preciso da permissão de \`EMBED_LINKS\`]
$setUserVar[ban1;$findUser[$message[1]]]
$setUserVar[reason;$message]

$suppressErrors[]`
}