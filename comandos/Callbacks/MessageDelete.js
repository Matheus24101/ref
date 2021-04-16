module.exports.deletedCommand = {
 channel: "$channelID",
 code: `
 $setChannelVar[deletedIcon;$authorAvatar]
 $setChannelVar[deletedMessage;$message]
 $setChannelVar[deletedAuthor;$userTag]
 $setChannelVar[deletedChannel;#$channelName[$channelUsed]] 
 $onlyIf[$isBot==false;]
`
}