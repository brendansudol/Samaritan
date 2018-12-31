const guides = require('./guides')
const paris = require('./cities/paris')
const venice = require('./cities/venice')
const sydney = require('./cities/sydney')
const newyork = require('./cities/newyork')

const api = {
  guides,
  cities: [paris, venice, sydney, newyork],
}

export default api
