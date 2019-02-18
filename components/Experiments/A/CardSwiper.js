import React from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Card from './Card'
import EmptyState from './EmptyState'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class CardSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cards: props.getCards() }
  }

  onCardSwiped = id => {
    this.setState(prevState => {
      const swipedIndex = prevState.cards.findIndex(card => card.id === id)
      const isLastIndex = swipedIndex === prevState.cards.length - 1
      const nextIndex = swipedIndex + 1
      const newState = { ...prevState }
      newState.cards[swipedIndex]['isActive'] = false
      if (isLastIndex) return prevState
      newState.cards[nextIndex]['isActive'] = true
      return newState
    })
  }

  handleNopeSelect = (dy = 0, position = false) => {
    const activeIndex = this.state.cards.findIndex(card => card.isActive)
    if (activeIndex < 0) return
    if (!position) {
      position = this.state.cards[activeIndex].position
    }
    Animated.spring(position, {
      toValue: { x: SCREEN_WIDTH + 100, y: dy },
    }).start(this.onCardSwiped(this.state.cards[activeIndex].id))
  }

  handleLikeSelect = (dy = 0, position = false) => {
    const activeIndex = this.state.cards.findIndex(card => card.isActive)
    if (activeIndex < 0) return
    if (!position) {
      position = this.state.cards[activeIndex].position
    }
    Animated.spring(position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: dy },
    }).start(this.onCardSwiped(this.state.cards[activeIndex].id))
  }

  renderCards = cards => {
    if (this.isEmptyState())
      return <EmptyState reloadCards={this.reloadCards} />

    return cards
      .map((card, index) => {
        return (
          <Card
            key={card.id}
            {...card}
            handleNopeSelect={this.handleNopeSelect}
            handleLikeSelect={this.handleLikeSelect}
          />
        )
      })
      .reverse()
  }

  reloadCards = () => {
    this.setState({ cards: this.props.getCards() })
  }

  isEmptyState = () => {
    return this.state.cards.findIndex(card => card.isActive) < 0
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardArea}>
          {this.renderCards(this.state.cards)}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleLikeSelect()}
          >
            <Text>Yep</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleNopeSelect()}
          >
            <Text>Nope</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  cardArea: {
    flex: 10,
    marginTop: 30,
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  btn: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    backgroundColor: '#efefef',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
})
