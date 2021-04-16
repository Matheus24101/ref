module.exports.command = {
    name: "resetmoney",
    code:
`
$reactionCollector[$splitText[1];$authorID;10h;<:success:823597185663893554>;resetmoney;no]
$setServerVar[l;$splitText[1]]
$setVar[l;$mentioned[1]]
$textSplit[$sendMessage[{color:8000FF}{author:$usertag:$authoravatar}{description:Deseja realmente resetar o money de <@$mentioned[1]>?};yes]; ]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Mencione alguem para resetar o money dela!}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`ADMINISTRADOR\`} {color:#8000FF}]


$suppresErrors[]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}