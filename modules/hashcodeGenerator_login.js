const hashcode = require("./hashcode.js");
const loginRequest = require("./loginRequest.js");

async function hashcodeGenerator_login(inputData) {
    let userName = inputData.userName.toUpperCase();
    let userPassword = inputData.userPassword.toUpperCase();

    let hashcodeKeys = Object.keys(hashcode);

    let userPasswordStr = "";
    for (let i = 0; i < userPassword.length; i++) {
        hashcodeKeys.forEach ((serverEle) => {
            if (userPassword[i] === serverEle) {
                let ele = hashcode[serverEle];
                userPasswordStr += ele;
            }
        })
    }

    const status = await loginRequest(userName, userPasswordStr);
    return status;
}

module.exports = hashcodeGenerator_login;