module.exports.command = {
  name: "userinfo", aliases: ['ui'],
  code:
`
$if[$findMember[$message]==$findUser[$message]]

$setUserVar[b;$splitText[1]]
$reactionCollector[$splitText[1];$authorID;10m;<:kisspngmagentapurpleviolettriang:824825219402825748>,<:kisspngcomputericonspinkarrow5ad:824825424689365022>;backui,userinfo;no]
$textSplit[$sendMessage[{description:\n$replaceText[$replaceText[$checkContains[$findUser[$message];$ownerID];true;👑];false;] $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];dnd;<:DE_DND:824094867084410900>
];online;<:Online:824093982971002933>
];offline;<:Invisible:824095226552516648>
];idle;<:DE_Idle:824095681249280040>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];Early Verified Developer;$customEmoji[Early_Verified_Developer]];House Balance;$customEmoji[HOUSE_BALANCE]];House Brilliance;$customEmoji[HOUSE_BRILLIANCE]];House Bravery;$customEmoji[HOUSE_BRAVERY]];Verified Developer;];Discord Partner;$customEmoji[DISCORD_PARTNER]];Early Supporter;$customEmoji[Early_Supporter]];Verified Bot;$customEmoji[Verified_Bot]];Nitro Classic;$customEmoji[Nitro_Classic]]; ,;];Partnered Server Owner,;];Discord Employee;$customEmoji[DISCORD_EMPLOYEE]];Hypesquad Events;$customEmoji[hypesquad_events]];Bughunter Level 2;$customEmoji[BUGHUNTER_LEVEL_2]];Bughunter Level 1;$customEmoji[BUGHUNTER_LEVEL_1]];,;] $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;];web;🌐];mobile;📱];desktop;🖥️] $replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖];false;] **$username[$findUser[$message]]**

💾 **ID do usuario:** ( $findUser[$message] )

💠 **Entrou no servidor em:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$findUser[$message];time];years;anos];months;meses];weeks;semanas];days;dias];hours;horas];seconds;segundos];and;e];minutes;minutos];second;segundo];minute;minuto];hour;hora];day;dia];week;semana];year;ano];month;mês]

📅 **Data de criação da conta:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];years;anos];months;meses];weeks;semanas];days;dias];hours;horas];seconds;segundos];and;e];minutes;minutos];second;segundo];minute;minuto];hour;hora];day;dia];week;semana];year;ano];month;mês]}
{color:8000FF}
{thumbnail:$userAvatar[$findUser[$message]]};yes]; ]

$else

$setUserVar[b;$splitText[1]]
$textSplit[$sendMessage[{description:\n$replaceText[$replaceText[$checkContains[$findUser[$message];$ownerID];true;👑];false;] $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];dnd;<:DE_DND:824094867084410900>
];online;<:Online:824093982971002933>
];offline;<:Invisible:824095226552516648>
];idle;<:DE_Idle:824095681249280040>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];Early Verified Developer;$customEmoji[Early_Verified_Developer]];House Balance;$customEmoji[HOUSE_BALANCE]];House Brilliance;$customEmoji[HOUSE_BRILLIANCE]];House Bravery;$customEmoji[HOUSE_BRAVERY]];Verified Developer;];Discord Partner;$customEmoji[DISCORD_PARTNER]];Early Supporter;$customEmoji[Early_Supporter]];Verified Bot;$customEmoji[Verified_Bot]];Nitro Classic;$customEmoji[Nitro_Classic]]; ,;];Partnered Server Owner,;];Discord Employee;$customEmoji[DISCORD_EMPLOYEE]];Hypesquad Events;$customEmoji[hypesquad_events]];Bughunter Level 2;$customEmoji[BUGHUNTER_LEVEL_2]];Bughunter Level 1;$customEmoji[BUGHUNTER_LEVEL_1]];,;] $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;];web;🌐];mobile;📱];desktop;🖥️] $replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖];false;] **$username[$findUser[$message]]**

💾 **ID do usuario:** ( $findUser[$message] )

📅 **Data de criação da conta:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];years;anos];months;meses];weeks;semanas];days;dias];hours;horas];seconds;segundos];and;e];minutes;minutos];second;segundo];minute;minuto];hour;hora];day;dia];week;semana];year;ano];month;mês]}
{color:8000FF}
{thumbnail:$userAvatar[$findUser[$message]]};yes]; ]

$endif

$setUserVar[c;$findUser[$message]]
$setUserVar[b;]
$cooldown[15s;{author:$userTag:$authorAvatar} {description:<:6215time:827970917032132638> Espere \`%time%\` para realizar o comando novamente!} {color:#8000FF}]

`
}