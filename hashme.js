const { hashSync } = require('bcryptjs')
const SALT_ROUNDS = 10

if (process.argv.length !== 3) {
  console.error('Usage: node hashme.js [CLEAR TEXT YOU WANT TO HASH]')
}
else {
  console.log(hashSync(process.argv[2]))
}
