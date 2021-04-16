module.exports.command = {
  name: "coinflip",
  code:
`
$if[$randomText[a;b]==a]

  $setUserVar[money;$sum[$getUserVar[money];$message[1]]]
  $description[<:6443_coin:830574709178761286> A moeda caiu **$randomText[cara;coroa]** e você ganhou **$message[1]** coins]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$elseif[$randomText[a;b]==b]

  $setUserVar[money;$sub[$getUserVar[money];$message[1]]]
  $description[<:6443_coin:830574709178761286> A moeda caiu **$randomText[cara;coroa]** e você perdeu **$message[1]** coins]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$endelseif
$endif

$onlyIf[$getUserVar[money]>$message[1];{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não tem toda essa quantia! seu saldo atual é de $getUserVar[money]}]
$onlyIf[$isNumber[$message[1]]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque uma aposta valida!}]
$onlyIf[$message[1]!=;{author:$usertag:$authoravatar}{description:<:error:823299033011191808> Coloque uma quantia para apostar!}{color:8000FF}]
`
}