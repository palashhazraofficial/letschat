const path = require('path');
const fs = require('fs');

function checkPin(userPin) {
    fs.readFile('../data/adminPin/adminPin.json', 'utf8', (err, data) => {
        const adminPin = JSON.parse(data).adminPin;
        if (adminPin === userPin) {
            return true;
        } else {
            return false;
        }
    });
}

module.exports = checkPin;