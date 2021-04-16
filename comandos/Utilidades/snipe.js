module.exports.command = {
 name: "snipe",
 code: 
`
 $author[$getChannelVar[deletedAuthor]]
 $description[$replaceText[$replaceText[$checkContains[**Snipe**
$getChannelVar[deletedMessage];discord.gg/;https://;www.];true;<:error:823299033011191808> O úsuario que apagou a mensagem tinha colocado uma mensagem com \`discord.gg / https:// / www.\` por isso, não mostrarei a mensagem.];false;$getChannelVar[deletedMessage]]]
 $footer[$getChannelVar[deletedChannel]]
 $thumbnail[$getChannelVar[deletedIcon]]
 $color[8000FF]

 $onlyIf[$getChannelVar[deletedMessage]!=;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Não a nada para snipar nesse canal!} {color:8000FF}]

 $cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

`
}