module.exports.command = {
  name: "channelinfo",
  code:
`
$author[$usertag;$authoravatar]
$title[Info do canal: $channel[$findChannel[$message];name]]
$description[
<:6554connection:828326402218655836> **Tópico:** $replaceText[$replaceText[$channel[$findChannel[$message];topic];null;Nenhum tópico definido];undefined;]
<:3091library:828326365946183690> **Id:** $channel[$findchannel[$message];id]
<:9799stagechannel:828326422950445057> **Data de Criação:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$channel[$findchannel[$message];created];Monday;Segunda];Tuesday;Terça];Wednesday;Quarta];Thursday;Quinta];Friday;Sexta];Saturday;Sábado];Sunday;Domindo];January;Janeiro];February;Fevereiro];March;Março];April;Abril];May;Maio];June;Junho];July;Julho];August;Agosto];September;Setembro];October;Outubro];November;Novembro];December;Dezembro]
$replaceText[$replaceText[$replaceText[$replaceText[$channel[$findchannel[$message];type];text;<:4406_text_emoji:828323367857553468>];voice;<:3581_voice_emoji:828323367463551008>];category;<:2044settings:828324485962137615>];news;<:9582_announce:828323368574386217>] **Tipo:** $replaceText[$replaceText[$replaceText[$replaceText[$channel[$findchannel[$message];type];text;Texto];voice;Voz];category;Categoria];news;Anunciamentos]
]
$color[8000FF]
 $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}