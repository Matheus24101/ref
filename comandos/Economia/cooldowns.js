module.exports.command = {
  name: "set-cooldown", aliases: [' z!set-cooldowns'],
  code:
`
$if[$toLowerCase[$message]==dice $toLowerCase[$message[2]]]

  $setServerVar[dicecol;$message[2]]

  $description[<:6215time:827970917032132638> Cooldown setado para \`$message[2]\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$replaceText[$ReplaceText[$replaceText[$replaceText[$message[2];m;];s;];h;];d;]<60;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Por favor coloque um tempo menor de 60, para segundos, minutos, horas, ou dias}]
  
  $onlyif[$checkContains[$message[2];.;,;+;-;=;n/;NaN]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyif[$checkContains[$message[2];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$djsEval[const ms = require('ms')
  ms('$message[2]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um novo cooldown para o comando!}]

$elseif[$toLowerCase[$message]==work $toLowerCase[$message[2]]]
  
  $setServerVar[wc;$message[2]]

  $description[<:6215time:827970917032132638> Cooldown setado para \`$message[2]\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$replaceText[$ReplaceText[$replaceText[$replaceText[$message[2];m;];s;];h;];d;]<60;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Por favor coloque um tempo menor de 60, para segundos, minutos, horas, ou dias}]
  
  $onlyif[$checkContains[$message[2];.;,;+;-;=;n/;NaN]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyif[$checkContains[$message[2];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$djsEval[const ms = require('ms')
  ms('$message[2]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um novo cooldown para o comando!}]

$endelseif
$elseif[$toLowerCase[$message]==rob $toLowerCase[$message[2]]]

  $setServerVar[robcol;$message[2]]

  $description[<:6215time:827970917032132638> Cooldown setado para \`$message[2]\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$replaceText[$ReplaceText[$replaceText[$replaceText[$message[2];m;];s;];h;];d;]<60;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Por favor coloque um tempo menor de 60, para segundos, minutos, horas, ou dias}]
  
  $onlyif[$checkContains[$message[2];.;,;+;-;=;n/;NaN]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyif[$checkContains[$message[2];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$djsEval[const ms = require('ms')
  ms('$message[2]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um novo cooldown para o comando!}]

$endelseif
$elseif[$toLowerCase[$message]==slut $toLowerCase[$message[2]]]

  $setServerVar[slcol;$message[2]]

  $description[<:6215time:827970917032132638> Cooldown setado para \`$message[2]\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$replaceText[$ReplaceText[$replaceText[$replaceText[$message[2];m;];s;];h;];d;]<60;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Por favor coloque um tempo menor de 60, para segundos, minutos, horas, ou dias}]
  
  $onlyif[$checkContains[$message[2];.;,;+;-;=;n/;NaN]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyif[$checkContains[$message[2];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$djsEval[const ms = require('ms')
  ms('$message[2]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um novo cooldown para o comando!}]

$endelseif
$elseif[$toLowerCase[$message]==crime $toLowerCase[$message[2]]]

  $setServerVar[crcol;$message[2]]

  $description[<:6215time:827970917032132638> Cooldown setado para \`$message[2]\`]
  $color[8000FF]
  $author[$usertag;$authoravatar]

  $onlyIf[$replaceText[$ReplaceText[$replaceText[$replaceText[$message[2];m;];s;];h;];d;]<60;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Por favor coloque um tempo menor de 60, para segundos, minutos, horas, ou dias}]
  
  $onlyif[$checkContains[$message[2];.;,;+;-;=;n/;NaN]==false;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyif[$checkContains[$message[2];s;m;h;d]==true;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$djsEval[const ms = require('ms')
  ms('$message[2]');yes]!=undefined;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Você não colocou um número valido! você pode usar: **s (segundos) m (minutos) h (horas) d (dias)**}]
  $onlyIf[$message[2]!=;{author:$usertag:$authoravatar}{color:8000FF}{description:<:error:823299033011191808> Coloque um novo cooldown para o comando!}]

$endelseif
$else

  $color[8000FF]
  $author[$usertag;$authoravatar]
  $description[<:6215time:827970917032132638> Tempo de cooldowns atualmente:
  
  > **Work \`$getServerVar[wc]\`**
  > **Slut \`$getServerVar[slcol]\`**
  > **Crime \$getServerVar[crcol]\`**
  > **Rob: \`$getServerVar[robcol]\`**
  > **Dice: \`$getServerVar[dicecol]\`**
]
  $footer[Como mudar o tempo: $getServerVar[prefixo]set-cooldown (comando) (novo tempo para o cooldown)]

$endif

$onlyPerms[admin;{author:$userTag:$authorAvatar} {description:<:error:823299033011191808> Você não tem permissões suficientes, você precisa da permissão de \`ADMINISTRADOR\`} {color:#8000FF}]

$cooldown[5s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para usar o comando novamente!} {color:#8000FF}]
`
}