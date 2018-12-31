import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import {
  StackNavigatorOptions,
  TabNavigatorOptions,
} from '../components/Navigation'
import TabBarIcon from '../components/TabBarIcon'
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import StayTuned from '../screens/StayTuned'
import Links from '../screens/Links'
import Settings from '../screens/Settings'
import Cause from '../screens/Cause'
import Causes from '../screens/Causes'
import Guides from '../screens/Guides'
import Guide from '../screens/Guide'

const HomeStack = createStackNavigator({ Home })

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const LinksStack = createStackNavigator({ Links })

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}

const SettingsStack = createStackNavigator({ Settings })

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
}

const ExampleTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
})

const CausesNavigator = createStackNavigator(
  {
    Causes,
    Cause,
  },
  StackNavigatorOptions
)

const GuidesNavigator = createStackNavigator(
  {
    Guides,
    Guide,
  },
  StackNavigatorOptions
)

const OldTravelNavigator = createBottomTabNavigator(
  {
    Causes: CausesNavigator,
    Guides: GuidesNavigator,
  },
  TabNavigatorOptions([
    { key: 'Causes', label: 'Causes', icon: 'heart' },
    { key: 'Guides', label: 'Guides', icon: 'feed' },
  ])
)

const MainStack = createStackNavigator(
  {
    Landing,
    StayTuned,
    Causes: CausesNavigator,
    Travel: OldTravelNavigator,
    ExampleTabs: ExampleTabNavigator,
  },
  { initialRouteName: 'Landing', headerMode: 'none' }
)

const AppNavigator = createSwitchNavigator({
  Main: MainStack,
})

export default AppNavigator
