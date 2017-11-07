console.log("hi, I'm index.js!");
window.Template = {
  generateSnippets(data){
    const array = data.map(item => {
      let post = item.content
      if(item.content.length > 255) {
        const snippet = item.content.slice(0, 255) + '...'
        post = `${snippet}<br><a class='button is-text'>Read More</a>`
      }
      return `
        <div class="post-title">${item.title}</div>
        <div class="post-body">${post}
        <br>
        <a class="button">Edit</a>
        <a class="button">Delete</a>
    `
    })
    return array.join(' ')
  }
}
