console.log("Hey, you just called index.js");
const url = 'http://localhost:3000/posts'

axios.get(`${url}`)
  .then(result => {
    console.log(result.data);
  })
  .catch(error => (error))
