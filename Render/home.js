document.addEventListener('DOMContentLoaded', ()=> renderHome())

function renderHome(){
  document.querySelector("#newPost").addEventListener('click', renderForm)
  Request.getAll()
    .then((result) => {
      document.querySelector('#container').innerHTML = generateSnippets(result.data)
      editEvents(document.querySelectorAll(".btn-edit"))
      deleteEvents(document.querySelectorAll(".btn-del"))
      readMore(document.querySelectorAll(".read-more"))
    })
    .catch(error => (error))
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
