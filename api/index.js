const newyork = require('./cities/newyork')
const paris = require('./cities/paris')
const sydney = require('./cities/sydney')
const venice = require('./cities/venice')
const guides = require('./guides')

const api = {
  guides,
  cities: [paris, venice, sydney, newyork],
}

export default api
