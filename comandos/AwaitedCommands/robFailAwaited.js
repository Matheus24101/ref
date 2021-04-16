module.exports.awaitedCommand = {
    name: "naoroubou",
    code:
`
$setUserVar[money;$sub[$getUserVar[money];$random[1;$getUserVar[money;$getVar[l]]]]]

$description[<:4799_police:829875009219461160> Você tentou roubar o <@$getVar[l]> e foi pego! foram retirados $random[1;$getUserVar[money]] coins de você!]
$author[$userTag;$authorAvatar]
$color[8000FF]
`
}