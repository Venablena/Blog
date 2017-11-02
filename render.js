console.log("Hey, you just called index.js");
const url = 'http://localhost:3000/posts'

axios.get(`${url}`)
  .then(result => {
    document.querySelector('#container').innerHTML = result.data
  })
  .catch(error => (error))

axios.post(`${url}`, {
  title: document.querySelector('#post-title').value,
  content: document.querySelector('#post-body').textContent
})
  .then(response => generateSnippets(response))
  .catch(error => (error))
