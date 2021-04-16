
module.exports.command = {
name: "addrole",
code: `$createRole[$message]

$author[$usertag;$authoravatar]
$color[8000FF]
$description[Cargo \`$message[1]\` criado!]
$onlyIf[$message!=;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Como utilizar: \`$getServerVar[prefixo]addrole\`}]

$onlyBotPerms[manageroles;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Eu preciso da permissão de \`GERENCIAR_CARGOS\`}]

$onlyPerms[manageroles;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`GERENCIAR_CARGOS\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]`
}