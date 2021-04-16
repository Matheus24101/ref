module.exports.command = {
    name: "bal", aliases: ['balance'],
    code:
`
$author[$usertag[$mentioned[1;yes]];$useravatar[$mentioned[1;yes]]]
$description[**Carteira de $userTag[$mentioned[1;yes]]**

Na carteira: $getServerVar[ms] $getUserVar[money;$mentioned[1;yes]]
No banco: $getServerVar[ms] $getUserVar[bank;$mentioned[1;yes]]
Valor total: $getServerVar[ms] $sum[$getUserVar[money;$mentioned[1;yes]];$getUserVar[bank;$mentioned[1;yes]]]]
$color[8000FF]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}