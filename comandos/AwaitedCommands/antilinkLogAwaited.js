module.exports.awaitedCommand = {
    name: "antilinklog",
    code:
`
$deleteCommand
$sendMessage[{delete:5s}{title:AntiLink!}{description:<:9549_link:828694380381864007> Você não pode enviar links nesse servidor <@$authorID>!}
    {color:8000FF}
    {author:$usertag:$authoravatar};no]
`
}