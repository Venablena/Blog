console.log("This is home.js");
function renderHome(){
  Request.getAll()
    .then((result) => {
      document.querySelector('#container').innerHTML = generateSnippets(result.data)
      editEvents(document.querySelectorAll(".btn-edit"))
      deleteEvents(document.querySelectorAll(".btn-del"))
      readMore(document.querySelectorAll(".read-more"))
    })
    .catch(error => (error))
}
//Get all
document.addEventListener('DOMContentLoaded', ()=> renderHome())

function editEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      console.log(el.parentNode);
      document.querySelector('#container').innerHTML = templateForm(
        post = {id:'', title: '', content:''})
    })
  })
}

function deleteEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      //destroy

      const id = el.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
      console.log(id);
    })
  })
}

function readMore(button){
  button.forEach(el =>{
    el.addEventListener('click', () => {
      //  const id = el.nextSibling.nextSibling.textContent
      const id = el.parentElement.parentElement.nextSibling.nextSibling.textContent
      console.log(id)
       return Request.show(id)
       .then((result) => {
         console.log(result.data);
         document.querySelector('#container').innerHTML = showOne(result.data)
         //need a template here to change this into HTML!
       })
    })
  })
}
