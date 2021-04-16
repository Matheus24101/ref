module.exports.command = {
name: "ghostmute",
code: `Adicionei o usuário \`\`\`$username[$findUser[$message;no]]\`\`\` a lista do ghostmute.
$setUserVar[ghostmute;$findUser[$message;no];$findUser[$message;no]]
$onlyForIDs[$botwonerid;]`
};