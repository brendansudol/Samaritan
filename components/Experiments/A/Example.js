import React from 'react'
import { Animated } from 'react-native'

import CardSwiper from './CardSwiper'

import img1 from './images/image1.jpeg'
import img2 from './images/image2.jpeg'
import img3 from './images/image3.jpeg'
import img4 from './images/image4.jpeg'
import img5 from './images/image5.jpeg'

const getCards = () => {
  const cards = [
    { id: '1', image: img1, isActive: true },
    { id: '2', image: img2, isActive: false },
    { id: '3', image: img3, isActive: false },
    { id: '4', image: img4, isActive: false },
    { id: '5', image: img5, isActive: false },
  ]
  let lastItemPosition = false
  cards.forEach((card, i) => {
    const position = new Animated.ValueXY()
    card.position = position
    card.parentPosition = lastItemPosition
    lastItemPosition = position
  })
  return cards
}

export default class Example extends React.Component {
  render() {
    return <CardSwiper getCards={getCards} />
  }
}
