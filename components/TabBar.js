import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
} from 'react-native'

import Icon from './Icon'
import { StyleGuide } from './theme'

export default class TabBar extends React.Component {
  navigate(key) {
    const { tabs, navigation } = this.props
    const activeKey = tabs[navigation.state.index].key

    if (key === activeKey) return
    navigation.navigate(key)
  }

  render() {
    const { tabs, navigation } = this.props
    const activeKey = tabs[navigation.state.index].key

    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.tabs}>
          {tabs.map(tab => (
            <TouchableWithoutFeedback
              key={tab.key}
              onPress={() => this.navigate(tab.key)}
            >
              <View style={styles.tab}>
                {tab.icon ? (
                  <Icon name={tab.icon} primary={activeKey === tab.key} />
                ) : (
                  <Text
                    style={{
                      fontWeight: activeKey === tab.key ? 'bold' : 'normal',
                    }}
                  >
                    {tab.label}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    ...StyleGuide.styles.shadow,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    ...StyleGuide.styles.barHeight,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
