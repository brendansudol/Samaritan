import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import CardStack, { Card } from 'react-native-card-stack-swiper'

import CardItem from './CardItem'

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    status: 'Online',
    match: '78',
    description:
      'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    message:
      'I will go back to Gotham and I will fight men Iike this but I will not become an executioner.',
    image: require('./images/01.jpg'),
  },
  {
    id: 2,
    name: 'Clementine Bauch',
    match: '93',
    description:
      'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    status: 'Offline',
    message: "Someone like you. Someone who'll rattle the cages.",
    image: require('./images/02.jpg'),
  },
  {
    id: 3,
    name: 'Ervin Howell',
    match: '45',
    description:
      'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    status: 'Offline',
    message:
      'Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.',
    image: require('./images/03.jpg'),
  },
  {
    id: 4,
    name: 'John Lebsack',
    match: '88',
    description:
      'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    status: 'Online',
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: require('./images/04.jpg'),
  },
  {
    id: 5,
    name: 'James Dietrich',
    match: '76',
    description:
      'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    status: 'Offline',
    message: "It's not who I am underneath but what I do that defines me.",
    image: require('./images/05.jpg'),
  },
]

export default class Example extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = { data }

  render() {
    return (
      <ImageBackground source={require('./images/bg.png')} style={styles.bg}>
        <View style={styles.container}>
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => {
              return null
            }}
            ref={swiper => {
              this.swiper = swiper
            }}
          >
            {this.state.data.map((item, index) => {
              return (
                <Card key={index}>
                  <CardItem
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    matches={item.match}
                    actions
                    onPressLeft={() => {
                      this.swiper.swipeLeft()
                    }}
                    onPressRight={() => {
                      this.swiper.swipeRight()
                    }}
                  />
                </Card>
              )
            })}
          </CardStack>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 40,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
