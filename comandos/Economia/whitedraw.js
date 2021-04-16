module.exports.command = {
    name: "withdraw", aliases: ['with'],
    code:
`
$if[$message==all]

$setUserVar[bank;0]
$setUserVar[money;$sum[$getUserVar[money];$getUserVar[bank]]]

$author[$usertag;$authoravatar]
$color[8000FF]
$description[Você retirou $getServerVar[ms] $getUserVar[bank] coins do seu banco!]
$onlyIf[$getUserVar[bank]>0;{author:$usertag:$authoravatar}{description:<:error:823299033011191808> Você não tem nada no banco!}{color:8000FF}]

$elseIf[$isNumber[$message]==true]

$author[$usertag;$authoravatar]
$color[8000FF]
$description[Você retirou $getServerVar[ms] $message[1] coins do seu banco!]
$onlyIF[$checkContains[$message;n/;.;,;+;-;/]==false;{color:8000FF}{author:$usertag:$authoravatar}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]deposit ( quantia para depositar / all )\`}]
$onlyIf[$getUserVar[bank]>$message[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não tem toda essa quantia! Seu saldo no banco atual é de $getServerVar[ms] $getUserVar[bank] coins}]
$onlyIf[$message>0;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Digite um número maior do que 0!}]

$endelseif
$else
  
  $author[$usertag;$authoravatar]
  $color[8000FF]
  $description[<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitedraw ( quantia para sacar / all )\`]

$endif

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}