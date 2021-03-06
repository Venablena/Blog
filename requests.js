const url = 'https://take-a-note-of-this.herokuapp.com/posts'

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
  destroy(id){
    return axios.delete(`${url}/${id}`)
  },
  update(id, body){
    return axios.put(`${url}/${id}`, body)
  }
}
