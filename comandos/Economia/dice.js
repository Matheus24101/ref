module.exports.command = {
    name: "dice",
    code:
`
$if[$random[1;6]==$message[1]]

  $setUserVar[money;$sum[$getUserVar[money];$random[30;150]]]
  $color[8000FF]
  $author[$usertag;$authoravatar]
  $description[<:grey_dice:830543356412690526> **O dado girou, e caiu em $random[1;6] e você ganhou $random[30;150] coins!**]
  
$else

  $setUserVar[money;$sub[$getUserVar[money];$random[30;150]]]
  $color[8000FF]
  $author[$usertag;$authoravatar]
  $description[<:grey_dice:830543356412690526> **O dado girou, e caiu em $random[1;6] e você perdeu $random[30;150] coins!**]

$endif


$cooldown[$getServerVar[dicecol];{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para rodar o dado denovo!} {color:#8000FF}]

$onlyIf[$message>0;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido de 1 a 6 para girar o dado!}]

$onlyIf[$message<7;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido de 1 a 6 para girar o dado!}]

$onlyIf[$isNumber[$message]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido de 1 a 6 para girar o dado!}]

$onlyIf[$message!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido de 1 a 6 para girar o dado!}]

$onlyIf[$getUserVar[money]>1;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não tem coins suficientes para rodar os dados!}]
`
}