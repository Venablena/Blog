function generateSnippets(data){
  const array = data.map(item => {
    // if(item.content.length > 180) {
    //   const snippet = item.content.slice(0, 180) + '...'
    //   item.content = `${snippet}<div><a class='button is-text is-pulled-right read-more'>Read More</a></div>`
    // }
    return `<div class="column is-one-quarter">${showOne(item)}</div>`
  })
  array.reverse()
  return array.join(' ')
}
