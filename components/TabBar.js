import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
} from 'react-native'
import { StackActions } from 'react-navigation'

import Icon from './Icon'
import { StyleGuide } from './theme'

export default class TabBar extends React.Component {
  navigate(key) {
    const { tabs, navigation } = this.props
    const activeKey = tabs[navigation.state.index].key
    if (activeKey !== key) {
      navigation.navigate(key)
    } else {
      navigation.dispatch(StackActions.pop({ n: 1 }))
    }
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
                  <Text>{tab.label}</Text>
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
