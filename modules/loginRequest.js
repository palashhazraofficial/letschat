const fs = require("fs");
const path = require("path");

async function loginRequest (userName, userPassword) {
    const jsonFilePath = path.join(__dirname, "../data/password/password.json");
    
    return new Promise((resolve, reject) => {
        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error("File read error:", err);
                return resolve(false); 
            }

            const jsonArray = JSON.parse(data); 
            let status = false; 

            for (let user of jsonArray) {
                if (user.userName === userName && user.userPassword === userPassword) {
                    console.log("Login Successful!");
                    status = true;
                    break; 
                }
            }

            resolve(status); 
        });
    });
}

module.exports = loginRequest;

