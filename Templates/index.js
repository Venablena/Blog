function generateSnippets(data){
  const array = data.map(item => {
    if(item.content.length > 255) {
      const snippet = item.content.slice(0, 255) + '...'
      item.content = `${snippet}<div><a class='button is-text read-more'>Read More</a></div>`
    }
    return showOne(item)
  })
  array.reverse()
  return array.join(' ')
}
