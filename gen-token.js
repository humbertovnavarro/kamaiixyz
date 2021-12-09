const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('jwt.key');
const hostname = process.argv[2];
const token = jwt.sign({}, privateKey);
console.log(token);