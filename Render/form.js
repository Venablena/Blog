document.querySelector('#newPost').addEventListener('click', event => {
  document.querySelector('#container').innerHTML = templateForm(post = {id:'', title:'', content:''})

  document.querySelector('#cancel').addEventListener('click', event => {
    renderHome()
  })

  document.querySelector('#createNew').addEventListener('submit', event => {
    event.preventDefault()
    createNew()
    renderHome()
  })

})
