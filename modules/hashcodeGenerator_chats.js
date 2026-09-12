const hashcode = require("./hashcode.js");
const saveMsgtoDataBase = require('./saveMsgtoDataBase.js');

function hashcodeGenerator_chats(userName, msg, sendTime) {
    let name = userName.toUpperCase();
    let message = msg.toUpperCase();
    let time = String(sendTime).toUpperCase();

    let hashcodeKeys = Object.keys(hashcode);

    let nameHash = "";
    for (let i = 0; i < name.length; i++) {
        hashcodeKeys.forEach ((serverEle) => {
            if (name[i] === serverEle) {
                let ele = hashcode[serverEle];
                nameHash += ele;
            }
        })
    }

    let messageHash = "";
    for (let i = 0; i < message.length; i++) {
        hashcodeKeys.forEach ((serverEle) => {
            if (message[i] === serverEle) {
                let ele = hashcode[serverEle];
                messageHash += ele;
            }
        })
    }

    let timeHash = "";
    for (let i = 0; i < time.length; i++) {
        hashcodeKeys.forEach ((serverEle) => {
            if (time[i] === serverEle) {
                let ele = hashcode[serverEle];
                timeHash += ele;
            }
        })
    }

    saveMsgtoDataBase(nameHash, messageHash, timeHash);

}

module.exports = hashcodeGenerator_chats;