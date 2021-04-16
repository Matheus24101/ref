module.exports.command = {
    name: "rob",
    code:
`
$setUserVar[money;$sub[$getUserVar[money;$mentioned[1]];$random[1;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]

$setUserVar[money;$sum[$getUserVar[money];$random[1;$getUserVar[money;$mentioned[1]]]]]

$description[**$username** roubou **$username[$mentioned[1]]** e ganhou **$random[1;$getUserVar[money;$mentioned[1]]]** coins]
$color[8000FF]
$author[$usertag;$authorAvatar]

$onlyIf[$random[1;10]!=3;{execute:naoroubou}]

$setVar[l;$mentioned[1]]
$setServerVar[l;$splitText[1]]

$cooldown[$getServerVar[robcol];{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para robar denovo!} {color:#8000FF}]

$onlyIf[$getUserVar[money;$mentioned[1]]>0;{author:$usertag:$authoravatar}{description:<:error:823299033011191808> O úsuario não tem coins suficientes para você roubar!}{color:8000FF}]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Mencione alguem para roubar!}]

`
}