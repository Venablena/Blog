function createNew(){
  const title = document.querySelector('#post-title').value
  const content = document.querySelector('#post-body').value
  if(title === "" && content === "")renderHome()
  Request.new({ title, content })
    .then(() => renderHome())
}
