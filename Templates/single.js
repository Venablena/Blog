function showOne(item){
  return `
    <div class="box">
    <h3 class="is-size-5">${item.title}</h3>
    <div class="content post-body">${item.content}</div>
    <div class="id is-hidden">${item.id}</div>
    <a class="button btn-edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
    <a class="delete btn-del is-pulled-right"></a>
    </div>
`
}
// <span class="fa-stack">
//   <i class="fa fa-circle fa-stack-2x"></i>
//   <i class="fa fa-times fa-stack-1x fa-inverse"></i>
// </span>
