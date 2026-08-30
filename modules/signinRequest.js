const path = require('path');
const fs = require('fs');
const checkPin = require('./checkPin.js');

function signinRequest (userName, userPasswordStr, userPinStr) {

    if (checkPin(userPinStr)) {

        console.log("Pin Mached");
        
        let filePath = `../data/password/${userName}.json`;

        let userData = {
            "userName" : userName,
            "userPassword" : userPasswordStr,
        }

        let userDataString = JSON.stringify(userData, null, 2);

        fs.writeFile(filePath, userDataString, 'utf8', (err) => {
            if (err) {
                console.log("Error Occured: ", err);
            }
        })

    } else {
        console.log("Pin Not Matched!");
    }

}

module.exports = signinRequest;