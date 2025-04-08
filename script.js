require('dotenv').config();
const jwt = require('jsonwebtoken');


const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

const decrypt = (token) => {
  // return decoded payload using jwt.verify
  return jwt.verify(token, process.env.JWT_SECRET);
}

const payload = { name: 'laya', id: 22};

const token = encrypt(payload);
console.log('JWT Token:', token);

const decoded = decrypt(token);
console.log('Decoded Payload:', decoded);

module.exports = {
  encrypt,
  decrypt
}