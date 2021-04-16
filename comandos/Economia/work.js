module.exports.command = {
    name: "work",
    code:
`
$setUserVar[money;$sum[$getUserVar[money];$random[50;120]]]

$author[$usertag;$authoravatar]
$description[Você trabalhou de **$randomText[Fazendeiro;Policial;Médico;Veterinario;Strip Dance;Pedreiro]** e ganhou $getServerVar[ms] **$random[50;120]** coins]
$color[8000FF]

$cooldown[$getServerVar[wc];{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para trabalhar novamente!} {color:#8000FF}]
`
}