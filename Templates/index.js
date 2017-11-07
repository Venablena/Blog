console.log("hi, I'm index.js!");
window.Template = {
  generateSnippets(data){
    const array = data.map(item => {
      console.log(item);
      const snippet = item.content.slice(0, 255) + '...'
      return `
        <div class="post-title">${item.title}</div>
        <div class="post-body">${snippet}</div>
        <a class='button read-more'>Read More</a>
        <a class="button is-text">Edit</a>
        `
    })
    return array.join(' ')
  }
}
