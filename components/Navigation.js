import * as React from 'react'

import TabBar from './TabBar'

export const StackNavigatorOptions = {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white',
  },
}

export const animationEnabled = true

export const TabNavigatorOptions = tabs => ({
  animationEnabled,
  // eslint-disable-next-line react/display-name
  tabBarComponent: ({ navigation }) => <TabBar {...{ navigation, tabs }} />,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
})
