module.exports.command = {
  name: "unban",
  code: 
`
$unban[$message[1]]
$author[$userTag;$authorAvatar]
$description[**$username[$message[1]] Foi desbanido desse servidor! 
Desbanido por: <@$authorID>
Motivo: $replaceText[$replaceText[$message;$message[1];];;Motivo não definido]**]
$thumbnail[$userAvatar[$message[1]]]
$color[#8000FF]

$onlyIf[$isBanned[$findUser[$message[1]]]!=false;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> O usuário não está banido!}]

$onlyIf[$userExists[$message[1]]!=false;{author:$userTag:$authorAvatar} {color:#8000FF} {description:<:error:823299033011191808> Esse usuário não existe!}]

$onlyIf[$message[1]!=;{author:$userTag:$authorAvatar} {color:#8000FF} {description:<:error:823299033011191808> Coloque o id de alguem!}]

$onlyBotPerms[ban;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`BANIR_MEMBROS\`}]

$onlyPerms[ban;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`BANIR_MEMBROS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

`
}