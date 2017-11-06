console.log("requests here, hi!");
const url = 'http://localhost:3000/posts'

window.Call = {
  getAll(){
  return axios.get(`${url}`)
  }
}
