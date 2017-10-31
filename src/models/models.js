console.log("models running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

function getAll() {
  const data = readDB()
  data.forEach(item => {
    console.log(item.title);
    console.log(item.body);
  })
  // console.log(data.title);
  // console.log(data.body);
  //const allPosts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  // console.log("Get all function here")
  //return JSON.stringify(allPosts)
  //return JSON.stringify(fs.readFileSync(filePath, 'utf-8'))
  // console.log(result);
  //return data
}

module.exports = {
  getAll
}

function readDB(){
  const post = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return post.data
}
