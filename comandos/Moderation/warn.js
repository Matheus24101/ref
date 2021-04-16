module.exports.command = {
  name: "warn",
  code:
`
$author[$userTag;$authorAvatar]
$description[Você avisou <@$findUser[$message[1];no]> por\`$replaceText[$message;$message[1];]\` com sucesso
Id do Aviso: \`#$getServerVar[warn]\`]
$color[8000FF]
$sendDM[$findUser[$message[1]];{author:$usertag:$authoravatar}{color:8000FF}{description:**<@$finduser[$message[1]]> Você foi avisado no servidor:** $servername
**Motivo:** \`$replaceText[$replaceText[____$replaceText[$message;$message[1];]____;______;Nenhum Motivo definido];____;]\`
**Moderador:** $usertag}]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.push("/$findUser[$message[1];no]/$getServerVar[warn]", { "motivo":"$replaceText[$message;$message[1];]","moderador":"$username", "id":"$getServerVar[warn]"});]
$setServerVar[warn;$sum[$getServerVar[warn];1]]

$argsCheck[>2;{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Coloque um motivo!}]

$onlyIf[$findUser[$message[1];no]!=undefined;{author:$userTag:$authorAvatar}{color:8000FF}{description:<:error:823299033011191808> Não encontrei o membro! mencione ele ou use o id}]

$onlyBotPerms[kick;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, eu preciso da permissão de \`KIKAR_MEMBROS\`}]

$onlyPerms[kick;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`KIKAR_MEMBROS\`} {color:8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$onlyForIDs[$botOwnerID;]
`
}