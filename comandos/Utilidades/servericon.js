module.exports.command = {
  name: "servericon",
  code:
`
$title[:frame_photo: $serverName]
$description[Clique [aqui\\]($servericon) para baixar]
$image[$serverIcon[$guildID;473x473]]
$author[$usertag;$authorAvatar]
$color[8000FF]
$onlyif[$servericon!=null;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O servidor não tem nenhuma imagem definida!}]
 $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}