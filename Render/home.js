console.log("This is home.js");

window.Render = {
  init() {
    Request.getAll()
      .then(result => {
        document.querySelector('#container').innerHTML = Template.generateSnippets(result.data)
      })
      .catch(error => (error))
  },
  newPost() {
    Request.new()
      // .then(result => {
      //   console.log(result.data);
      // })
  }
}
//Get all
Render.init()
//Create new
document.querySelector('#createNew').addEventListener('submit', event => {
  event.preventDefault()
  const title = document.querySelector('#post-title').value
  const content = document.querySelector('#post-body').value
  //console.log({title, content});
  Request.new({ title, content })
  //Render.init()
})
