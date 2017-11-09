document.addEventListener('DOMContentLoaded', ()=> renderHome())

function renderHome(){
  Request.getAll()
    .then((result) => {
      document.querySelector('#container').innerHTML = generateSnippets(result.data)
      document.querySelector("#newPost").addEventListener('click', renderForm)
      editEvents(document.querySelectorAll(".btn-edit"))
      deleteEvents(document.querySelectorAll(".btn-del"))
      readMore(document.querySelectorAll(".read-more"))
    })
    .catch(error => (error))
}

function editEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      const id = el.previousSibling.previousSibling.textContent
      Request.show(id)
        .then((result) => {
          document.querySelector('#container').innerHTML = templateForm(
            post = { id:result.data.id, title: result.data.title, content: result.data.content }, 'updateForm')
            updateEvent(document.querySelector('#updateForm'))
         document.querySelector('#cancel').addEventListener('click', renderHome)
        })
    })
  })
}

function updateEvent(form){
  form.addEventListener('submit', event => {
    event.preventDefault()
    const title = document.querySelector('#post-title').value
    const content = document.querySelector('#post-body').value
    return Request.update({ title, content })
      .then(() => renderHome())
      .catch(error => (error))
  })
}

function deleteEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      const id = el.previousSibling.previousSibling.previousSibling.previousSibling.textContent
      Request.destroy(id)
       .then(() => renderHome())
       .catch(error => (error))
    })
  })
}

function readMore(button){
  button.forEach(el =>{
    el.addEventListener('click', () => {
      const id = el.parentElement.parentElement.nextSibling.nextSibling.textContent
       Request.show(id)
       .then((result) => {
         document.querySelector('#container').innerHTML = showOne(result.data)
         document.querySelector('#cancel').addEventListener('click', renderHome)
         editEvents(document.querySelectorAll('.btn-edit'))

       }).catch(error => (error))
    })
  })
}
