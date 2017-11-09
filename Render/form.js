function renderForm(){
  //document.querySelector('#newPost').addEventListener('click', event => {
    document.querySelector('#container').innerHTML = templateForm(post = {id:'', title:'', content:''}, 'newForm')

    document.querySelector('#cancel').addEventListener('click', event => {
      renderHome()
    })

    document.querySelector('#newForm').addEventListener('submit', event => {
      event.preventDefault()
      createNew()
    })

    // document.querySelector('#updateForm').addEventListener('submit', event => {
    //   event.preventDefault()
    //   const title = document.querySelector('#post-title').value
    //   const content = document.querySelector('#post-body').value
    //   Request.update({ title, content })
    //   renderHome()
    // })
  //})
}
