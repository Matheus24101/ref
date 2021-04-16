module.exports.command = {
  name: "log", aliases: ['logs'],
  code:
`
$title[<:9230stats:827970917032394812> Logs Disponiveis:]
$description[$replaceText[$replaceText[$checkContains[$getServerVar[logban];830558348410748948];true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-ban**
$replaceText[$checkContains[%%$getServerVar[logpunicao]%%;830558348410748948;true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-punições**
$replaceText[$replaceText[$checkContains[%%$getServerVar[logchannel]%%;830558348410748948];true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-canais**
$replaceText[$replaceText[$checkContains[%%$getServerVar[logmessage]%%;830558348410748948];true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-mensagens**
$replaceText[$replaceText[$checkContains[%%$getServerVar[loguser]%%;830558348410748948];true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-úsuario**
$replaceText[$replaceText[$checkContains[%%$getServerVar[logroles]%%;830558348410748948];true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-cargos**
$replaceText[$replaceText[$checkContains[%%$getServerVar[logantilink]%%;830558348410748948;true;<:6338_Toggle_OFF:827970916658577441>];false;<:1892_Toggle_on:827970917010636810>] **$getServerVar[prefixo]log-antilink**]
$color[8000FF]
$author[$usertag;$authoravatar]
$footer[Caso queira retirar algum log, use $getServerVar[prefixo]log-(log) remove]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {color:8000FF} {description:<:error:823299033011191808> Permissões insuficientes, você precisa da permissão de \`ADMINISTRADOR\`}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}