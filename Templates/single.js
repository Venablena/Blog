function showOne(item){
  return `
    <div class="content post-title"><h3>${item.title}</h3></div>
    <div class="content post-body">${item.content}</div>
    <div class='id hidden'>${item.id}</div>
    <a class="button btn-edit">Edit</a>
    <a class="button delete btn-del"></a>
`
}
