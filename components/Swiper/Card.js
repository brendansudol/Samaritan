import React, { Component } from 'react'
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
} from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const THRESHOLD = 120

export default class Card extends Component {
  constructor(props) {
    super(props)

    const { isActive, position, parentPosition } = props
    const defaultScale = isActive ? 0.9 : 0.85

    this.position = position

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    })

    this.nextCardScale = parentPosition
      ? parentPosition.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [0.9, 0.85, 0.9],
          extrapolate: 'clamp',
        })
      : defaultScale

    this.rotateAndTranslate = {
      transform: [
        { rotate: this.rotate },
        { scale: this.nextCardScale },
        ...this.position.getTranslateTransform(),
      ],
    }

    this.yesOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    })

    this.noOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    })
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.onStartShouldSetPanResponder,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
    })
  }

  onStartShouldSetPanResponder = () => {
    return this.props.isActive
  }

  onPanResponderMove = (_, change) => {
    this.position.setValue({ x: change.dx, y: change.dy })
  }

  onPanResponderRelease = (_, change) => {
    if (change.dx > THRESHOLD) {
      this.props.handleNo(change.dy, this.position)
    } else if (change.dx < -THRESHOLD) {
      this.props.handleYes(change.dy, this.position)
    } else {
      const vals = { toValue: { x: 0, y: 0 }, friction: 4 }
      Animated.spring(this.position, vals).start()
    }
  }

  render() {
    const { data, renderContent } = this.props

    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={[this.rotateAndTranslate, styles.card]}
      >
        <Animated.View
          style={[
            styles.SwipeTextContainer,
            styles.SwipeYesTextContainer,
            { opacity: this.yesOpacity },
          ]}
        >
          <Text style={[styles.SwipeText, styles.SwipeYesText]}>YES</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.SwipeTextContainer,
            styles.SwipeNoTextContainer,
            { opacity: this.noOpacity },
          ]}
        >
          <Text style={[styles.SwipeText, styles.SwipeNoText]}>NO</Text>
        </Animated.View>
        {renderContent(data)}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    height: '105%',
    width: SCREEN_WIDTH,
  },
  SwipeTextContainer: {
    position: 'absolute',
    top: 45,
    zIndex: 999,
  },
  SwipeText: {
    borderWidth: 2,
    fontSize: 30,
    fontWeight: '800',
    padding: 10,
    borderRadius: 4,
  },
  SwipeYesTextContainer: {
    right: 45,
    transform: [{ rotate: '15deg' }],
  },
  SwipeYesText: {
    color: '#4bdb79',
    borderColor: '#4bdb79',
  },
  SwipeNoTextContainer: {
    left: 45,
    transform: [{ rotate: '-15deg' }],
  },
  SwipeNoText: {
    color: '#D80027',
    borderColor: '#D80027',
  },
})
