function editEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      const id = el.previousSibling.previousSibling.textContent
      Request.show(id)
        .then((result) => {
          document.querySelector('#container').innerHTML = templateForm(
            post = { id:result.data.id, title: result.data.title, content: result.data.content }, 'update')
        })
    })
    updateEvent(document.querySelector('#updateForm'))
  })
}

function updateEvent(form){
  form.addEventListener('submit', event => {
    event.preventDefault()
    const title = document.querySelector('#post-title').value
    const content = document.querySelector('#post-body').value
    Request.update({ title, content })
      .then(() => renderHome())
  })
}
