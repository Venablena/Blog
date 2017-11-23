function showOne(item){

  return `<div class="card" background="2144.jpg">
    <header class="card-header">
     <p class="card-header-title">${item.title}</p>
    </header>
    <div class="card-content">
      <div class="content post-body">${item.content}</div>
      <div class="id is-hidden">${item.id}</div>
      <a class="button btn-edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
      <a class="btn-del">
      <i class="fa fa-times" aria-hidden="true"></i>
      </a>
    </div>
  </div>`
}
