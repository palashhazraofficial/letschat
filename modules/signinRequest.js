const path = require('path');
const fs = require('fs');
const checkPin = require('./checkPin.js');

function signinRequest (userName, userPasswordStr, userPinStr) {

    if (checkPin(userPinStr)) {

        console.log("Pin Matched!");

        const jsonFilePath = path.join(__dirname, "../data/password/password.json");
        let jsonArray = [];

        fs.readFile(jsonFilePath, 'utf8', (err, data) => {

            if(!err) {
                jsonArray = JSON.parse(data); 
                let newItem = {"userName" : userName, "userPassword" : userPasswordStr};
                jsonArray.push(newItem);

                // Render Log
                console.log("JSON ARRAY: ", jsonArray);
                
            } else {
                console.log("Error Occured: ", err);
            }

            fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2), 'utf8', (err) => {
                if (err) {
                console.log("Error Occured: ", err);
                }
            })


        })

    } else {
        console.log("Pin Not Matched!");
    }

}

module.exports = signinRequest;
