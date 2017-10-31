console.log("Hey, you just called index.js");
const url = 'http://localhost:3000/posts'

axios.get(`${url}`)
  .then(result => {
    document.querySelector('#container').innerHTML = result.data
    //console.log(result.data);
  })
  .catch(error => (error))
