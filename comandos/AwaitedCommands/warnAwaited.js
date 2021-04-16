module.exports.awaitedCommand = {
  name: "warn",
  code:
`
$sendMessage[{author:$userTag:$authorAvatar}{description:Você removeu todos os avisos de <@$getUserVar[3]>}{color:8000FF};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$getUserVar[3]");]

$onlyIf[$noMentionMessage==all;]

$if[$noMentionMessage!=all]

$sendMessage[{author:$userTag:$authorAvatar}{description:Você removeu o aviso #$noMentionMessage de <@$getUserVar[3]>}{color:8000FF};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$getUserVar[3]/$noMentionMessage");]

$endif

$onlyIf[$noMentionMessage!=;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]warn-remove (usuario) (id do aviso / all)\`}]
`
}