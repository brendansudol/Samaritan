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
import Cause from '../screens/Cause'
import Causes from '../screens/Causes'
import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import StayTuned from '../screens/StayTuned'

const CausesStack = createStackNavigator(
  {
    Causes,
    Cause,
  },
  StackNavigatorOptions
)

const MainTabNavigator = createBottomTabNavigator(
  {
    Causes: CausesStack,
    Foo: StayTuned,
    Bar: StayTuned,
  },
  TabNavigatorOptions([
    { key: 'Causes', label: 'Causes', icon: 'feed' },
    { key: 'Foo', label: 'Foo', icon: 'account' },
    { key: 'Bar', label: 'Bar', icon: 'money' },
  ])
)

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
})

const AppNavigator = createSwitchNavigator(
  {
    Landing,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  { initialRouteName: 'Landing', headerMode: 'none' }
)

export default AppNavigator
