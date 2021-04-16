module.exports.command = {
    name: "slut",
    code:
`
$if[$random[1;7]==5]

  $setUserVar[money;$sub[$getUservar[money];$random[30;100]]]

  $description[Você **vabagundou** e perdeu **$random[30;100]** coins]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$else

  $setUserVar[money;$sum[$getUservar[money];$random[30;100]]]

  $description[Você **vabagundou** e ganhou **$random[30;100]** coins]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$endif
$cooldown[$getServerVar[slcol];{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para vagabundar denovo!} {color:#8000FF}]
`
}