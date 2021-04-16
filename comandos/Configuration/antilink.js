module.exports.command = {
  name: "antilink",
  code:
`
$if[$message[1]==on]
 
  $setServerVar[antilink;on]
  $color[8000FF]
  $author[$usertag;$authorAvatar]
  $description[<:success:823597185663893554> AntiLink ativado com sucesso!]
  $onlyIf[$getServerVar[antilink]!=on;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O antilink já está ativado!}]

$elseif[$message[1]==off]

  $setServerVar[antilink;off]
  $color[8000FF]
  $author[$usertag;$authorAvatar]
  $description[<:success:823597185663893554> AntiLink desativado com sucesso!]
  $onlyIf[$getServerVar[antilink]!=off;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O antilink já está desativado!}]

$endelseif
$elseif[$message[1]==whitelist]

  $author[$usertag;$authoravatar]
  $description[<:error:823299033011191808> Como usar: $getServerVar[prefixo]whitelist @user]
  $color[8000FF]

$endelseif
$else
  
  $author[$usertag;$authoravatar]
  $description[<:error:823299033011191808> Como usar: $getServerVar[prefixo]antilink ( on / off / whitelist)
  **O antilink está atualmente:** \`$replaceText[$replaceText[$getServerVar[antilink];off;Desativado];on;Ativado]\`]
  $color[8000FF]

$endif

$onlyIf[$findRole[Zanya Mute]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Ocorreu um erro ao executar esse comando! porfavor tente novamente}{execute:muteError}]
$onlyIf[$ownerID==$authorID;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Somento o dono do servidor pode utilizar esse comando!}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}