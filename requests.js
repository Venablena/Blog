console.log("requests here, hi!");
const url = 'http://localhost:3000/posts'

window.Request = {
  getAll(){
    return axios.get(`${url}`)
  },
  show(id){
    return axios.get(`${url}/${id}`)
  },
  new(body){
    return axios.post(`${url}`, body)
  },
  remove(id){
    return axios.delete(`${url}/${id}`)
  },
  update(id, body){
    return axios.put(`${url}/${id}`, body)
  }
}
