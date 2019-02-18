import React, { Component } from 'react'

import CardSwiper from './CardSwiper'

const cards = [
  {
    id: '1',
    title: 'Card 1',
    backgroundColor: '#039BE5',
  },

  {
    id: '2',
    title: 'Card 2',
    backgroundColor: '#E65100',
  },

  {
    id: '3',
    title: 'Card 3',
    backgroundColor: '#795548',
  },

  {
    id: '4',
    title: 'Card 4',
    backgroundColor: '#0D47A1',
  },

  {
    id: '5',
    title: 'Card 5',
    backgroundColor: '#546E7A',
  },
]

export default class Example extends Component {
  render() {
    return <CardSwiper cards={cards} />
  }
}
