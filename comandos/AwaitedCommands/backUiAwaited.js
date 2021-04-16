module.exports.awaitedCommand = {
  name: "backui",
  code:
`
$editMessage[$message[1];{description:\n$replaceText[$replaceText[$checkContains[$getUserVar[c];$ownerID];true;👑];false;] $replaceText[$replaceText[$replaceText[$replaceText[$status[$getUserVar[c]];dnd;<:DE_DND:824094867084410900>
];online;<:Online:824093982971002933>
];offline;<:Invisible:824095226552516648>
];idle;<:DE_Idle:824095681249280040>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$getUserVar[c]];Early Verified Developer;$customEmoji[Early_Verified_Developer]];House Balance;$customEmoji[HOUSE_BALANCE]];House Brilliance;$customEmoji[HOUSE_BRILLIANCE]];House Bravery;$customEmoji[HOUSE_BRAVERY]];Verified Developer;];Discord Partner;$customEmoji[DISCORD_PARTNER]];Early Supporter;$customEmoji[Early_Supporter]];Verified Bot;$customEmoji[Verified_Bot]];Nitro Classic;$customEmoji[Nitro_Classic]]; ,;];Partnered Server Owner,;];Discord Employee;$customEmoji[DISCORD_EMPLOYEE]];Hypesquad Events;$customEmoji[hypesquad_events]];Bughunter Level 2;$customEmoji[BUGHUNTER_LEVEL_2]];Bughunter Level 1;$customEmoji[BUGHUNTER_LEVEL_1]];,;] $replaceText[$replaceText[$replaceText[$replaceText[$platform[$getUserVar[c]];web;🌐];mobile;📱];desktop;🖥️];none;] $replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖];false;] **$username[$getUserVar[c]]**

💾 **ID do usuario:** ( $getUserVar[c] )

💠 **Entrou no servidor em:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$getUserVar[c];time];years;anos];months;meses];weeks;semanas];days;dias];hours;horas];seconds;segundos];and;e];minutes;minutos];second;segundo];minute;minuto];hour;hora];day;dia];week;semana];year;ano];month;mês]

📅 **Data de criação da conta:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$getUserVar[c];time];years;anos];months;meses];weeks;semanas];days;dias];hours;horas];seconds;segundos];and;e];minutes;minutos];second;segundo];minute;minuto];hour;hora];day;dia];week;semana];year;ano];month;mês]}
{color:8000FF}
{thumbnail:$userAvatar[$getUserVar[c]]}]
`
}