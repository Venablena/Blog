

const fonts = [
  "font-family: 'Gloria Hallelujah', cursive;",
  "font-family: 'Amatic SC', cursive;",
  "font-family: 'Permanent Marker', cursive;",
  "font-family: 'Shadows Into Light', cursive;",
  "font-family: 'Shadows Into Light Two', cursive;",
  "font-family: 'Sacramento', cursive;",
  "font-family: 'Homemade Apple', cursive;",
  "font-family: 'Covered By Your Grace', cursive;",
  "font-family: 'Reenie Beanie', cursive;",
  "font-family: 'Sue Ellen Francisco', cursive;",
  "font-family: 'Butterfly Kids', cursive;",
  "font-family: 'Mrs Saint Delafield', cursive;",
  "font-family: 'Dawning of a New Day', cursive;",
  "font-family: 'Waiting for the Sunrise', cursive;",
  "font-family: 'Over the Rainbow', cursive;",
  "font-family: 'Loved by the King', cursive;",
  "font-family: 'Crafty Girls', cursive;",
  "font-family: 'La Belle Aurore', cursive;"
]

const papers = [
  "_original.jpeg",
  "3a340f781fa474279eddc60a00e98bc5c174c62d.jpeg",
  "2144.jpg",
  "2270.jpg",
  "3201.jpg",
  "3718.jpg",
  "6320.jpg",
  "6530.jpg",
  "abstract-2055560_960_720.jpg",
  "background-paper-797285_960_720.jpg",
  "STOCK-Watercolor-Texture-''Frost''-AuroraWienhold-DeviantArt-47629.jpg",
  "watercolor-2418958_960_720.jpg",
  "watercolour_texture_by_summer__moon-1.jpg"
]

function background(papers){
  var idx = Math.floor(Math.random() * papers.length)
  return papers(idx)
}

function chooseFont(fonts){
  var idx = Math.floor(Math.random() * fonts.length)
  return fonts(idx)
}
