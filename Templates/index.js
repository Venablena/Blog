function generateSnippets(data){
  const array = data.map(item => {
    if(item.content.length > 255) {
      const snippet = item.content.slice(0, 255) + '...'
      item.content = `${snippet}<div><a class='button is-text read-more'>Read More</a></div>`
    }
    return showOne(item)
  //   `
  //     <div class="content post-title"><h3>${item.title}</h3></div>
  //     <div class="content post-body">${post}
  //     <div class='id hidden'>${item.id}</div>
  //     <a class="button btn-edit">Edit</a>
  //     <a class="button delete btn-del"></a>
  // `

  })
  return array.join(' ')
}
