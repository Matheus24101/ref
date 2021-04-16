module.exports.command = {
  name: "warn-list", aliases: ['warnings'],
  code: 
`
$author[Avisos de $userTag[$findUser[$message[1];no]];$userAvatar[$findUser[$message[1];no]]]
$footer[$getObjectProperty[total] avisos totais]
$color[8000FF]

$description[$getObjectProperty[text]]

$onlyIf[$getObjectProperty[text]!=;]

$djsEval[const { promisify } = require("util") 

let user = '$findUser[$message[1];no]';

var read = promisify(require('read-file')) 

read('warns.json', 'utf8').then(buffer => {

try{

const warns = JSON.parse(buffer)

const obj = Object.values(warns[user\\]).filter(a => a.motivo && a.moderador && a.id) 

if (!obj.length) throw new Error("ignore") 

d.object.total = obj.length
d.object.text = obj.map((data, number) => '**Aviso: #' + number + '**:\\n **ID do aviso:** \`' + data.id + '\`\\n **Motivo:** \`' + data.motivo + '\`\\n **Moderador:** ' + data.moderador).join("\\n\\n")

} catch(e) {

message.channel.send('Esse membros não tem avisos.')

}

});yes]

$createObject[{}]
$onlyIf[$findUser[$message[1];no]!=undefined;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Não achei esse membro, tente mencionar o usuário ou usar o id dele.}]

$onlyPerms[kick;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`KIKAR_MEMBROS\`} {color:8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
$onlyForIDs[$botOwnerID;]
`
}