import React from 'react'
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Card from './Card'
import Empty from './Empty'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default class CardSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cards: props.data }
  }

  onSwiped = (idx, dir) => {
    if (dir === 'LEFT') {
      Alert.alert('💸😇')
    }

    this.setState(prev => {
      const cards = [...prev.cards]

      cards[idx].isActive = false
      if (idx < cards.length - 1) cards[idx + 1].isActive = true

      return { ...prev, cards }
    })
  }

  onSwipeStart = (dir = 'LEFT') => (dy = 0, position = false) => {
    const { cards } = this.state
    const idx = cards.findIndex(card => card.isActive)
    if (idx < 0) return

    const positionNorm = position || cards[idx].position
    const x = (SCREEN_WIDTH + 100) * (dir === 'LEFT' ? -1 : 1)
    const toValue = { x, y: dy }

    Animated.spring(positionNorm, { toValue }).start(this.onSwiped(idx, dir))
  }

  handleYes = this.onSwipeStart('LEFT')
  handleNo = this.onSwipeStart('RIGHT')

  handleRefresh = () => {
    console.log('TODO: REFRESH CARDS') // TODO
  }

  renderCards = cards => {
    // TODO: clean up these props
    return cards
      .map(card => {
        return (
          <Card
            key={card.id}
            handleNo={this.handleNo}
            handleYes={this.handleYes}
            renderContent={this.props.renderItem}
            isActive={card.isActive}
            position={card.position}
            parentPosition={card.parentPosition}
            data={card}
          />
        )
      })
      .reverse()
  }

  render() {
    const { cards } = this.state
    const isEmpty = cards.find(card => card.isActive) == null

    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {isEmpty ? (
            <Empty refresh={this.handleRefresh} />
          ) : (
            this.renderCards(cards)
          )}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => this.handleYes()}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.handleNo()}>
            <Text>No</Text>
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
  cardContainer: {
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
})
