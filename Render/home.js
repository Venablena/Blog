console.log("This is home.js");
//const url = 'http://localhost:3000/posts'

// function getAll(){
// return axios.get(`${url}`)
//   .then(result => {
//     document.querySelector('#container').innerHTML = Post.generateSnippets(result.data)
//   })
//   .catch(error => (error))
// }
//
// getAll()
window.home = {
  init () {
    Call.getAll()
      .then(result => {
        document.querySelector('#container').innerHTML = Post.generateSnippets(result.data)
      })
      .catch(error => (error))
  }
}

home.init()
