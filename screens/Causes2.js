import moment from 'moment'
import React, { Component } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import Api from '../api'
import Deck from '../components/Swiper/Deck'

class Causes2 extends Component {
  renderItem = datum => {
    const { navigation } = this.props

    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemMainImg} source={{ uri: datum.picture.uri }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button
          title="Learn more"
          onPress={() => navigation.navigate('Cause', { cause: datum })}
        />
      </View>
    )
  }

  render() {
    const title = moment().format('ddd, MMM Do')
    const data = prepData(Api.cities)

    return <Deck data={data} renderItem={this.renderItem} title={title} />
  }
}

const mapStateToProps = state => ({ state })

const prepData = data => {
  const dataNew = []
  let lastPosition = false

  data.forEach((d, i) => {
    const position = new Animated.ValueXY()

    dataNew.push({
      ...d,
      position,
      parentPosition: lastPosition,
      isActive: i === 0,
    })

    lastPosition = position
  })

  return dataNew
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
  },
  itemMainImg: {
    borderRadius: 20,
    height: null,
    width: null,
    resizeMode: 'cover',
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default connect(mapStateToProps)(Causes2)
