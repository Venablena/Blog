const fonts = [
  "Gloria Hallelujah",
  "Amatic SC",
  "Permanent Marker",
  "Shadows Into Light",
  "Shadows Into Light Two",
  "Sacramento",
  "Homemade Apple",
  "Covered By Your Grace",
  "Reenie Beanie",
  "Sue Ellen Francisco",
  "Butterfly Kids",
  "Mrs Saint Delafield",
  "Dawning of a New Day",
  "Waiting for the Sunrise",
  "Over the Rainbow",
  "Loved by the King",
  "Crafty Girls",
  "La Belle Aurore"
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
  return papers[idx]
}

function chooseFont(fonts){
  var idx = Math.floor(Math.random() * fonts.length)
  return fonts[idx]
}
