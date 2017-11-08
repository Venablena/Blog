console.log("This is home.js");
function renderHome(){
  Request.getAll()
    .then((result) => {
      document.querySelector('#container').innerHTML = generateSnippets(result.data)
      editEvents(document.querySelectorAll(".btn-edit"))
      deleteEvents(document.querySelectorAll(".btn-del"))
    })
    .catch(error => (error))
}
//Get all
document.addEventListener('DOMContentLoaded', ()=> renderHome())

function editEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      console.log("edit");
      templateForm(post = {id:'', title:'', content:''})
    })
  })
}

function deleteEvents(button){
  button.forEach(el => {
    el.addEventListener('click', () => {
      //destroy
      console.log("delete");
    })
  })
}
