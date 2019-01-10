import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import { Container, NavigationBar, Content } from '../components'

export default class StayTunedScreen extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <NavigationBar title="Test" expanded {...{ navigation }} />
        <Content style={styles.content}>
          <Image
            source={require('../assets/images/icon-transparent.png')}
            style={styles.img}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})
