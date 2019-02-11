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
import Interests from '../screens/Interests'
import Landing from '../screens/Landing'
import Profile from '../screens/Profile'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

import ExampleA from '../components/CardSwipers/A/Example'
import ExampleB from '../components/CardSwipers/B/Example'
import ExampleC from '../components/CardSwipers/C/Example'
import ExampleD from '../components/CardSwipers/D/Example'
import ExampleE from '../components/CardSwipers/E/Example'

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

const CardSwipers = createBottomTabNavigator(
  {
    ExampleA,
    ExampleB,
    ExampleC,
    ExampleD,
    ExampleE,
  },
  TabNavigatorOptions([
    { key: 'ExampleA', label: 'A' },
    { key: 'ExampleB', label: 'B' },
    { key: 'ExampleC', label: 'C' },
    { key: 'ExampleD', label: 'D' },
    { key: 'ExampleE', label: 'E' },
  ])
)

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
  Interests,
})

const AppNavigator = createSwitchNavigator(
  {
    CardSwipers,
    Landing,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  { initialRouteName: 'Landing', headerMode: 'none' }
)

export default AppNavigator
