module.exports.command = {
  name: "serverinfo",
  code:
`
$description[<:discord:825280567066755072> **$serverName**

💠 **ID do servidor:** 
$guildID

👑 **Dono(a):** 
$usertag[$ownerID]

🔰 **Região:** 
$replaceText[$guild[$guildID;region];brazil;brasil]

💾 **Canais ( $channelCount )**
> 💬 **Texto ( $channelCount[text] )**
> 🔈  **Voz ( $channelCount[voice] )**
> 🔰  **Categorias ( $sub[$channelcount;$channelcount[text];$channelcount[voice]] )**

📅 **Criado em:** 
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$guild[$guildId;created];Monday;Segunda];Tuesday;Terça];Wednesday;Quarta];Thursday;Quinta];Friday;Sexta];Saturday;Sábado];Sunday;Domindo];January;Janeiro];February;Fevereiro];March;Março];April;Abril];May;Maio];June;Junho];July;Julho];August;Agosto];September;Setembro];October;Outubro];November;Novembro];December;Dezembro]

👤 **Membros ( $guild[$guildID;membercount] )**]
$color[8000FF]
$thumbnail[$replaceText[$serverIcon;null;$userAvatar[$authorID]]]

 $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}