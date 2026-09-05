const hashcode = require("./hashcode.js");
const signinRequest = require("./signinRequest.js");

function hashcodeGenerator(inputData) {
    let userName = inputData.userName.toUpperCase();
    let userPassword = inputData.userPassword.toUpperCase();
    let userPin = inputData.userPin.toUpperCase();

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

    let userPinStr = "";
    for (let j = 0; j < userPin.length; j++) {
        hashcodeKeys.forEach ((serverEle) => {
            if (userPin[j] === serverEle) {
                let ele = hashcode[serverEle];
                userPinStr += ele;
            }
        })
    }

    signinRequest(userName, userPasswordStr, userPinStr);
}

module.exports = hashcodeGenerator;