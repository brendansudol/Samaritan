import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import Swiper from 'react-native-swiper'

const imgs = {
  grinning: require('../assets/images/emoji/grinning.png'),
  sunglasses: require('../assets/images/emoji/sunglasses.png'),
  tongue: require('../assets/images/emoji/tongue-out.png'),
  winking: require('../assets/images/emoji/winking.png'),
}

const Slide = ({ imgKey = 'grinning' }) => (
  <View style={styles.slide}>
    <Image source={imgs[imgKey]} style={styles.slideImg} />
    <View style={styles.slideTextContainer}>
      <Text style={styles.slideText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
  </View>
)

export default class Landing extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.slideContainer}
          showsButtons={false}
          loop={false}
          dotColor="#eee"
          activeDotColor="#000"
        >
          <Slide imgKey="grinning" />
          <Slide imgKey="sunglasses" />
          <Slide imgKey="tongue" />
          <Slide imgKey="winking" />
        </Swiper>
        <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
          <Button
            mode="contained"
            color="#fdd33f"
            onPress={() => this.props.navigation.navigate('Main')}
          >
            Get started
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  slideContainer: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImg: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  slideTextContainer: {
    margin: 50,
  },
  slideText: {
    fontSize: 16,
    lineHeight: 24,
  },
})
