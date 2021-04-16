module.exports.musicStartCommand = {
  channel: "$channelID",
  code:
`
$author[$usertag[$songinfo[userID]];$useravatar[$songinfo[userID]]]
$description[🎶 **Tocando agora: [$songInfo[title]\\]($songInfo[url])
Adiciona por: <@$songinfo[userID]>**]
$thumbnail[$songinfo[thumbnail]]
$color[8000FF]`
}