module.exports.command = {
    name: "removemoney",
    code:
`
$if[$toLowerCase[$noMentionMessage]==banco]

 $onlyIf[$checkContains[$noMentionMessage;n/;-;.;,]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
  $onlyIf[$isNumber[$noMentionMessage]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]


$elseif[$toLowerCase[$noMentionMessage]==banco $tolowercase[$noMentionMessage[2]]]

  $setUserVar[bank;$sub[$getUserVar[bank;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $description[Foram retirados **$replaceText[$noMentionMessage;+;] coins** do banco de <@$mentioned[1]>]
  $author[$usertag;$authoravatar]
  $color[8000FF]
  $onlyIf[$checkContains[$noMentionMessage;n/;-;.;,]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
  $onlyIf[$isNumber[$noMentionMessage]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
 

$endelseif
$elseif[$toLowerCase[$noMentionMessage]==coins]

 $onlyIf[$checkContains[$noMentionMessage;n/;-;.;,]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
  $onlyIf[$isNumber[$noMentionMessage]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]

$endelseif
$elseif[$toLowerCase[$noMentionMessage]==coins $tolowercase[$noMentionMessage[2]]]

  $setUserVar[bank;$sub[$getUserVar[bank;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $description[Foram retirados **$replaceText[$noMentionMessage;+;] coins** do <@$mentioned[1]>]
  $author[$usertag;$authoravatar]
  $color[8000FF]
  $onlyIf[$checkContains[$noMentionMessage;n/;-;.;,]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
  $onlyIf[$isNumber[$noMentionMessage]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um número valido!}]
 

$endelseif
$else

$author[$usertag;$authoravatar]
$color[8000FF]
$description[<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]removemoney @user (coins / banco) (quantia)\`]

$endif
$onlyIf[$checkContains[$toLowerCase[$noMentionMessage];banco;coins]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Como usar: \`$getServerVar[prefixo]removemoney @user (coins / banco) (quantia)\`}]

$onlyIf[$mentioned[1]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Mencione alguem para retirar o money dela!}]

$onlyPerms[admin;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`ADMINISTRADOR\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}