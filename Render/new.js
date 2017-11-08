function createNew(){
  const title = document.querySelector('#post-title').value
  const content = document.querySelector('#post-body').value
  Request.new({ title, content })
  return {title, content}
}
