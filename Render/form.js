function renderForm(){
    document.querySelector("#newPost").classList.add("is-hidden")

    document.querySelector('#container').innerHTML = templateForm(post = {id:'', title:'', content:''}, 'newForm')

    document.querySelector('#cancel').addEventListener('click', event => {
      renderHome()
    })

    document.querySelector('#newForm').addEventListener('submit', event => {
      event.preventDefault()
      createNew()
    })

}
