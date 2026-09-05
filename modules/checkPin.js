const adminPin = require("../data/adminPin/adminPin.js");

function checkPin(userPin) {

    if (adminPin === userPin) {
        return true;
    } else {
        return false;
    }

}

module.exports = checkPin;