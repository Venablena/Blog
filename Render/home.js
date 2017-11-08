console.log("This is home.js");
function renderHome(){
  Request.getAll()
    .then(result => {
      document.querySelector('#container').innerHTML = Template.generateSnippets(result.data)
    })
    .catch(error => (error))
}
//Get all
document.addEventListener('DOMContentLoaded', event => {renderHome()})
