module.exports.command = {
  name: "avatar",
  code:
`
$title[:frame_photo: Avatar de: $username[$findUser[$message]]]
$description[Clique [aqui\\]($userAvatar[$findUser[$message]]) para baixar a imagem]
$image[$userAvatar[$finduser[$message]]]
$author[$userTag;$authoravatar]
$color[8000FF]
 $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}