function generateSnippets(data){
  let array = data.map(item => {
    const snippet = item.body.slice(0, 255) + '...'
    return `
      <div class="post-title">${item.title}</div>
      <div class="post-body">${snippet}</div>
      <a class='button read-more'>Read More</a>
      <a class="button is-text">Edit</a>
      `
  })
  return array.join(' ')
}
