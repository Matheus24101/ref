module.exports.command = {
    name: "pay",
    code:
`
$setUserVar[money;$sum[$getUserVar[money;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
$setUserVar[money;$sub[$getUserVar[money];$noMentionMessage[1]]]
$author[$usertag;$authoravatar]
$color[8000FF]
$description[<:success:823597185663893554> Você pagou **$replaceText[$noMentionMessage[1];+;] coins** para <@$mentioned[1]>]

$onlyIf[$getUserVar[money]>$noMentionMessage[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não tem toda essa quantia! seu saldo atual é de $getUserVar[money] coins}]

$onlyIf[$checkContains[$noMentionMessage[1];n/;.;,;-]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um valor válido para você dar ao <@$mentioned[1]> !}]

$onlyIf[$isNumber[$noMentionMessage]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um valor válido para você dar ao <@$mentioned[1]> !}]

$onlyIf[$getUserVar[money]>0;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não tem coins suficientes!}]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Mencione alguem!}]
`
}