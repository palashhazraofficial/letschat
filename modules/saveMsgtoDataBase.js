const fs = require('fs');
const path = require('path');

function saveMsgtoDataBase(nameHash, messageHash, timeHash) {

    const jsonFilePath = path.join(__dirname, "../data/chats/chats.json");
    let jsonArray = [];
    
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    
        if(!err) {            
            jsonArray = JSON.parse(data); 
            let newItem = {"userName" : nameHash, "msg" : messageHash, sendTime : timeHash};
            jsonArray.push(newItem);                    
        } else {
            console.log("Error Occured: ", err);                
        }
    
        fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2), 'utf8', (err) => {
            if (err) {
                console.log("Error Occured: ", err);
            }
        })
    
    
    })
    
}

module.exports = saveMsgtoDataBase;