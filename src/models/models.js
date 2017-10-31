console.log("models running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

function getAll() {
  console.log("Get all function here")
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  //return JSON.stringify(result)
}

module.exports = {
  getAll
}
