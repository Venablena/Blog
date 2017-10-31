console.log("controller running");
const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json(data)
}

module.exports = {
  getAll
}
