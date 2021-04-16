module.exports.command = {
    name: "top",
    code:
`
$if[$userLeaderBoard[money;asc]==]
   
  $author[$usertag;$authoravatar]
  $color[8000FF]
  $description[Não á ninguem no top! que tal ser o primeiro?]
  $footer[$getServerVar[prefixo]work]
  
$else

$title[Top Coins do servidor]
$description[$userLeaderboard[money;asc;**{top}.** {username} **|** {value} $getServerVar[ms]]]
$color[8000FF]

$endif
$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}