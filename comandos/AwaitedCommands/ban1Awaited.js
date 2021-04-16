module.exports.awaitedCommand = {
  name: "ban1",
  code:
`
$setUserVar[a;$splitText[1]]
$reactionCollector[$splitText[1];$authorID;10m;<:success:823597185663893554>;banido;no]

$textSplit[$sendMessage[{author:$userTag:$authorAvatar} {description:**Você deseja realmente banir o **$username[$findUser[$message[1]]]**? isso é uma ação irreversível <:cuteWeep:822857179786379305>  **

Caso você queira desativar essa confirmação use \`$getServerVar[prefixo]ban-confirmation off\`} {color:8000FF};yes];no; ]
$setUserVar[ban1;$findUser[$message[1]]]
$onlyIf[$getServerVar[ban]!=yes;{execute:banido}]
$suppressErrors[]
`
}