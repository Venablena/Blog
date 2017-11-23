function generateSnippets(data){
  const array = data.map(item => {
    if(item.content.length > 120) {
      const snippet = item.content.slice(0, 120) + '...'
      item.content = `${snippet}<div><a class='button is-text read-more'>Read More</a></div>`
    }
    return `<div class="column is-one-quarter">${showOne(item)}</div>`
  })
  array.reverse()
  return array.join(' ')
}
