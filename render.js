console.log("This is render.js");
const url = 'http://localhost:3000/posts'

function getAll(){
return axios.get(`${url}`)
  .then(result => {
    document.querySelector('#container').innerHTML = Post.generateSnippets(result.data)
  })
  .catch(error => (error))
}

getAll()
// axios.post(`${url}`, {
//   title: document.querySelector('#post-title').value,
//   content: document.querySelector('#post-body').textContent
// })
// .catch(error => (error))
