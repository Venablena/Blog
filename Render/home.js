liveconsole.log("This is home.js");

window.home = {
  init () {
    Call.getAll()
      .then(result => {
        document.querySelector('#container').innerHTML = Post.generateSnippets(result.data)
      })
      .catch(error => (error))
  }
}

home.init()
