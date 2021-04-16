module.exports.command = {
    name: "crime",
    code:
`
$if[$random[1;5]==3]

  $setUserVar[money;$sub[$getUservar[money];$replaceText[$replaceText[$checkCondition[$getUserVar[money]<1];true;$random[100;300]];false;$random[1;$getUserVar[money]]]]]

  $description[<:4799_police:829875009219461160> Você **cometeu um crime** e foi pego, foram retirados **$replaceText[$replaceText[$checkCondition[$getUserVar[money]<1];true;$random[100;300]];false;$random[1;$getUserVar[money]]]** coins seus]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$else

  $setUserVar[money;$sub[$getUserVar[money];$random[1;$getUserVar[money]]]]

  $description[Você **cometeu um crime** com sucesso, você ganhou **$random[1;$getUserVar[money]]** coins]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$endif

$cooldown[$getServerVar[crcol];{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para fazer um crime denovo!} {color:#8000FF}]
`
}