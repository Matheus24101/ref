module.exports.command = {
  name: "join-test", aliases: ['wel-test'],
  code:
`
$useChannel[$getServerVar[joinchannel]]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinmsg];{user.mention};<@$authorID>];{user.tag};$userTag];{user.username};$username];{server.name};$serverName];{server.members};$membersCount]
$onlyIf[$getServerVar[joinchannel]!=;{author:$userTag:$authorAvatar} {color:8000FF}  {description:<:error:823299033011191808> Não ah nenhum canal definido, use \`$getServerVar[prefixo]join-channel\`}]

$onlyPerms[managemessages;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`DELETAR_MENSAGENS\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}