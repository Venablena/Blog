//Create empty form
document.querySelector('#newPost').addEventListener('click', event => {
  event.preventDefault()
  document.querySelector('#container').innerHTML = templateForm(post = {id:'', title:'', content:''})

  document.querySelector('#cancel').addEventListener('click', event => {
    document.querySelector('#container').innerHTML = renderHome()
  })
})
