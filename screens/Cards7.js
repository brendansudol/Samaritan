import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

class TinderCard extends Component<{}> {
  constructor() {
    super()

    this.panResponder

    this.state = {
      xValue: new Animated.Value(0),
      showLeftSwipeText: false,
      showRightSwipeText: false,
    }

    this.cardOpacity = new Animated.Value(1)
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,

      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        this.state.xValue.setValue(gestureState.dx)

        if (gestureState.dx > DEVICE_WIDTH - 250) {
          this.setState({ showRightSwipeText: true, showLeftSwipeText: false })
        } else if (gestureState.dx < -DEVICE_WIDTH + 250) {
          this.setState({ showLeftSwipeText: true, showRightSwipeText: false })
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        if (
          gestureState.dx < DEVICE_WIDTH - 150 &&
          gestureState.dx > -DEVICE_WIDTH + 150
        ) {
          this.setState({ showLeftSwipeText: false, showRightSwipeText: false })

          Animated.spring(
            this.state.xValue,
            {
              toValue: 0,
              speed: 5,
              bounciness: 10,
            },
            { useNativeDriver: true }
          ).start()
        } else if (gestureState.dx > DEVICE_WIDTH - 150) {
          Animated.parallel(
            [
              Animated.timing(this.state.xValue, {
                toValue: DEVICE_WIDTH,
                duration: 200,
              }),

              Animated.timing(this.cardOpacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            { useNativeDriver: true }
          ).start(() => {
            this.setState(
              { showLeftSwipeText: false, showRightSwipeText: false },
              () => {
                this.props.removeCard()
              }
            )
          })
        } else if (gestureState.dx < -DEVICE_WIDTH + 150) {
          Animated.parallel(
            [
              Animated.timing(this.state.xValue, {
                toValue: -DEVICE_WIDTH,
                duration: 200,
              }),

              Animated.timing(this.cardOpacity, {
                toValue: 0,
                duration: 200,
              }),
            ],
            { useNativeDriver: true }
          ).start(() => {
            this.setState(
              { showLeftSwipeText: false, showRightSwipeText: false },
              () => {
                this.props.removeCard()
              }
            )
          })
        }
      },
    })
  }

  render() {
    const rotateCard = this.state.xValue.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['-20deg', '0deg', '20deg'],
    })

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.card,
          {
            backgroundColor: this.props.item.backgroundColor,
            opacity: this.cardOpacity,
            transform: [
              { translateX: this.state.xValue },
              { rotate: rotateCard },
            ],
          },
        ]}
      >
        <Text style={styles.cardTitle}>{this.props.item.title}</Text>
        {this.state.showLeftSwipeText ? (
          <Text style={styles.leftText}>Left</Text>
        ) : null}
        {this.state.showRightSwipeText ? (
          <Text style={styles.rightText}>Right</Text>
        ) : null}
      </Animated.View>
    )
  }
}

export default class Cards7 extends Component<{}> {
  constructor() {
    super()

    this.state = {
      cardsArray: [
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
      ],
      showNoMoreCardsView: false,
    }
  }

  componentDidMount() {
    this.setState({ cardsArray: this.state.cardsArray.reverse() })

    if (this.state.cardsArray.length == 0) {
      this.setState({ showNoMoreCardsView: true })
    }
  }

  removeCard(id) {
    this.state.cardsArray.splice(
      this.state.cardsArray.findIndex(x => x.id == id),
      1
    )

    this.setState({ cardsArray: this.state.cardsArray }, () => {
      if (this.state.cardsArray.length == 0) {
        this.setState({ showNoMoreCardsView: true })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cardsArray.map((item, key) => (
          <TinderCard
            item={item}
            key={key}
            removeCard={this.removeCard.bind(this, item.id)}
          />
        ))}
        {this.state.showNoMoreCardsView ? (
          <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'black' }}>No More Cards</Text>
          </View>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  card: {
    width: '80%',
    height: '50%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  cardTitle: {
    color: 'white',
    fontSize: 25,
  },

  leftText: {
    position: 'absolute',
    top: 20,
    right: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent',
  },

  rightText: {
    position: 'absolute',
    top: 20,
    left: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
})
