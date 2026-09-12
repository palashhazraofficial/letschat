const fs = require('fs');
const path = require('path');
const hashcode = require('./hashcode');

function reverseHashCode_chats() {

    const jsonFilePath = path.join(__dirname, "../data/chats/chats.json");
    let jsonArray = [];
        
    const data = fs.readFileSync(jsonFilePath, 'utf8'); 

    jsonArray = JSON.parse(data);   
            
    let jsonArrayDecoded = [];

    jsonArray.forEach((data) => {

        userName = data.userName;
        msg = data.msg;
        sendTime = data.sendTime;

        let userNameDecoded = "";
        for (let i = 0; i < userName.length; i++) {

            let key = Object.keys(hashcode).find(k => 
                hashcode[k] === userName[i]
            );

            userNameDecoded += key;
        }

        let msgDecoded = "";
        for (let i = 0; i < msg.length; i++) {

            let key = Object.keys(hashcode).find(k => 
                hashcode[k] === msg[i]
            );

            msgDecoded += key;
        }

        let sendTimeDecoded = "";
        for (let i = 0; i < sendTime.length; i++) {

            let key = Object.keys(hashcode).find(k => 
                hashcode[k] === sendTime[i]
            );

            sendTimeDecoded += key;
        }

        let newItem = {"userName" : userNameDecoded, "msg" : msgDecoded, "sendTime" : sendTimeDecoded};
        jsonArrayDecoded.push(newItem);           
    })

    return jsonArrayDecoded; 

}

module.exports = reverseHashCode_chats;