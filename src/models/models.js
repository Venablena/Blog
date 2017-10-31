console.log("models running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')

function getAll() {
  const data = readDB()
  return generateHTML(data)
  // return data.map(item => {
  //   return `<div class="post-title">${item.title}</div><div class="post-body">${item.body}</div>`
  //   //const title = document.createElement('div')
  // })
}

function readDB(){
  const post = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return post.data
}

function generateHTML(data){
  let array = data.map(item => {
    return `<div class="post-title">${item.title}</div><div class="post-body">${item.body}</div>`
  })
  return array.join(' ')
  //console.log(array.join(' '));
}

module.exports = {
  getAll
}
