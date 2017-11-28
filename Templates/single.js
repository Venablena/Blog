function showOne(item){
  return ` <div class="card" style="font-family:${randomStyle(fonts)}; background:url(img/${randomStyle(papers)})">
    <div class= bg-overlay>
      <header class="card-header">
       <p class="card-header-title">${item.title}</p>
      </header>
      <div class="card-content">
        <div class="content post-body">${item.content}</div>
        <div class="id is-hidden">${item.id}</div>
        <a class="btn-edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        <a class="btn-del">
        <i class="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>`
}

function randomStyle(array){
  var idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

const fonts = [
  "Gloria Hallelujah",
  "Amatic SC",
  "Shadows Into Light",
  "Shadows Into Light Two",
  "Homemade Apple",
  "Covered By Your Grace",
  "Reenie Beanie",
  "Sue Ellen Francisco",
  "Waiting for the Sunrise",
  "Loved by the King",
  "Crafty Girls",
  "La Belle Aurore"
]

const papers = [
  "3a340f781fa474279eddc60a00e98bc5c174c62d.jpeg",
  "2144.jpg",
  "2270.jpg",
  "3201.jpg",
  "3718.jpg",
  "6530.jpg",
  "abstract-2055560_960_720.jpg",
  "background-paper-797285_960_720.jpg",
  "AuroraWienhold-DeviantArt-47629.jpg",
  "watercolour_texture_by_summer__moon-1.jpg"
]
