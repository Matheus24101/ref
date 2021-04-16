module.exports.command = {
    name: "whitelist",
    code:
`
$if[$message==add]

   $onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitelist add @user\`}]

$elseif[$message==add $message[2]]

   $setUserVar[antilink;on;$mentioned[1]]
   $color[8000FF]
   $author[$usertag;$authoravatar]
   $description[<:9549_link:828694380381864007> Agora <@$mentioned[1]> não será afetado pelo antilink!]
   $onlyIf[$getUserVar[antilink;$mentioned[1]]==off;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O úsuario já está na minha whitelist!}]
   $onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitelist add @user\`}]

$endelseif
$elseif[$message==remove]

   $onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitelist add @user\`}]

$endelseif
$elseif[$message==remove $message[2]]

$setUserVar[antilink;off;$mentioned[1]]
$color[8000FF]
$author[$usertag;$authoravatar]
$description[<:9549_link:828694380381864007> Agora <@$mentioned[1]> será afetado pelo antilink!]
$onlyIf[$getUserVar[antilink;$mentioned[1]]==on;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O úsuario não está na minha whitelist!}]
$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitelist remove @user\`}]

$endelseif
$elseif[$message==addcanal]

  $setChannelVar[antilink;on;$channelID]
  $color[8000FF]
  $author[$usertag;$authoravatar]
  $description[<:9549_link:828694380381864007> Agora <#$channelID> não será afetado pelo antilink!]
  $onlyIf[$getChannelVar[antilink;$channelID]==off;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O canal está na minha whitelist!}]

$endelseif
$elseif[$message==removecanal]

  $setChannelVar[antilink;off;$channelID]
  $color[8000FF]
  $author[$usertag;$authoravatar]
  $description[<:9549_link:828694380381864007> Agora <#$channelID> será afetado pelo antilink!]
  $onlyIf[$getChannelVar[antilink;$channelID]==on;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> O canal não está na minha whitelist!}]

$endelseif
$else

  $description[<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]whitelist (add / remove / addcanal / removecanal) @user\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

$endif
$onlyIf[$ownerID==$authorID;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Somento o dono do servidor pode utilizar esse comando!}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]
`
}