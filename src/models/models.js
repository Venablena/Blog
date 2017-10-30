const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.js')

function getAll(filePath,'utf-8') {
  return JSON.stringify(filePath)
}
