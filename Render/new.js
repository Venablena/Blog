//Create new post
function createNew(){
  document.querySelector('#createNew').addEventListener('submit', event => {
    event.preventDefault()
    const title = document.querySelector('#post-title').value
    const content = document.querySelector('#post-body').value
    Request.new({ title, content })
    renderHome()
  })
}
