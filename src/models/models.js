console.log("models running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

function getAll() {
  // console.log("Get all function here")
  return JSON.stringify(fs.readFileSync(filePath, 'utf-8'))
  // console.log(result);
  // return result
}

module.exports = {
  getAll
}
