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
      console.log("delete");
      const id = el.nextSibling.nextSibling.textContent;
      //console.log(el.parentNode.lastChild);
    })
  })
}

function readMore(button){
  button.forEach(el =>{
    el.addEventListener('click', () => {
      console.log("read more");
    })
  })
}
