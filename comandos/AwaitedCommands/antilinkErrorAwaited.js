module.exports.awaitedCommand = {
  name: "antilink",
  code: 
`
$deleteCommand
$usechannel[$getServerVar[logantilink]]
$description[$userTag acabou de enviar um link!
Mensagem: \`\`\`
$replaceText[$message;\`\`\`;]\`\`\`]
$color[8000FF]
$author[$usertag;$authoravatar]

$sendMessage[{delete:5s}{title:AntiLink!}{description:<:9549_link:828694380381864007> Você não pode enviar links nesse servidor <@$authorID>!}{color:8000FF}{author:$usertag:$authoravatar};no]

$onlyIf[$getServerVar[logantilink]!=;{execute:antilinklog}]
`
}