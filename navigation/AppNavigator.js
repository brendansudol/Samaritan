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
import Profile from '../screens/Profile'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

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
    Profile,
  },
  TabNavigatorOptions([
    { key: 'Causes', label: 'Causes', icon: 'feed' },
    { key: 'Profile', label: 'Profile', icon: 'account' },
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
  { initialRouteName: 'Main', headerMode: 'none' }
)

export default AppNavigator
