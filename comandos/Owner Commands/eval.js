module.exports.command = {
  name: "eval", aliases: ['e'],
  code: 
  `
$eval[$message;code]
  
  $onlyForIDs[$botOwnerID;Somente os meus desenvolvedores podem usar esse comando!]`
};