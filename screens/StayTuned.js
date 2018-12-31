import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class StayTunedScreen extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.img}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})
