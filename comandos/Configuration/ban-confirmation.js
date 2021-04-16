module.exports.command = {
  name: "ban-confirmation",
  code:
`
$if[$message==]

  $author[$userTag;$authorAvatar]
  $description[<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]ban-confirmation (on / off)\`]
  $color[#8000FF]

$elseif[$message==on]

  $author[$userTag;$authorAvatar]
  $description[<:success:823597185663893554> Confirmação ativada com sucesso!]
  $color[#8000FF]
  $setServerVar[ban;]
  $onlyIf[$getServerVar[ban]!=;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> A confirmação já está ativada!} {color:#8000FF}]

$endelseif
$elseif[$message==off]

  $author[$userTag;$authorAvatar]
  $description[<:success:823597185663893554> Confirmação desativada com sucesso!]
  $color[#8000FF]
  $setServerVar[ban;yes]
  $onlyIf[$getServerVar[ban]!=yes;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> A confirmação de ban já está desativada!} {color:#8000FF}]
  
$endelseif
$endif

$onlyIf[$ownerID==$authorID;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Somento o dono do servidor pode utilizar esse comando!}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]`
}