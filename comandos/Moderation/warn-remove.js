module.exports.command = {
  name: "warn-remove", aliases: ['unwarn'],
  code:
`
$sendMessage[{author:$userTag:$authorAvatar}{description:Você removeu todos os avisos de <@$mentioned[1]>}{color:8000FF};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]");]

$onlyIf[$noMentionMessage==all;]

$if[$noMentionMessage!=all]

$sendMessage[{author:$userTag:$authorAvatar}{description:Você removeu o aviso #$noMentionMessage de <@$mentioned[1]>}{color:8000FF};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]/$noMentionMessage");]

$endif

$onlyIf[$noMentionMessage!=;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> **ERROR!** Como usar: \`$getServerVar[prefixo]warn-remove (usuario) (id do aviso / all)\`}]

$onlyIf[$mentioned[1]!=$authorID;{author:$usertag:authoravatar}{color:8000FF}{description:<:error:823299033011191808> **ERROR!** Você não pode remover warns de si mesmo!}]

$onlyIf[$authorID!=$ownerID;{execute:warn}]

$setUserVar[3;$mentioned[1]]

$onlyIf[$mentioned[1]!=;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Mencione alguem}]

$argsCheck[>1;{color:8000FF} {author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]warn-remove (usuario) (id do aviso / all)\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

$onlyPerms[kick;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Você não tem permissões suficientes, você precisa da permissão de \`KIKAR_MEMBROS\`} {color:8000FF}]

$onlyForIDs[$botOwnerID;]
`
}