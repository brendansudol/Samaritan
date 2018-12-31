import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import TravelAPI from '../api'
import { Card, Feed } from '../components'

export default class Guides extends React.Component {
  renderItem = chunk => {
    const { navigation } = this.props
    return (
      <View style={styles.row}>
        {chunk.guides.map(guide => (
          <Card
            key={guide.id}
            title={guide.city}
            subtitle={guide.country}
            description={`${guide.duration} days`}
            onPress={() => navigation.navigate('Guide', { guide })}
            picture={guide.picture}
            height={chunk.guides.length === 1 ? 300 : 175}
          />
        ))}
      </View>
    )
  }

  onPress = () => {
    const { navigation } = this.props
    navigation.navigate('Landing')
  }

  render() {
    const { renderItem, onPress } = this
    const { navigation } = this.props
    const data = windowing(TravelAPI.guides).map(guides => ({
      id: guides.map(guide => guide.id).join(''),
      guides,
    }))
    const title = 'Guides'
    const rightAction = {
      icon: 'sign-out',
      onPress,
    }
    return <Feed {...{ data, renderItem, title, navigation, rightAction }} />
  }
}

const windowing = guides => {
  const windows = [[]]
  guides.forEach(guide => {
    if (windows[windows.length - 1].length === 2) {
      windows.push([guide])
      windows.push([])
    } else {
      windows[windows.length - 1].push(guide)
    }
  })
  return windows
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})
