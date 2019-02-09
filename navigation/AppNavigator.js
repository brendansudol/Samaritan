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

import Cards1 from '../screens/Cards1'
import Cards2 from '../screens/Cards2'
import Cards3 from '../screens/Cards3'
import Cards4 from '../screens/Cards4'
import Cards5 from '../screens/Cards5'
import Cards6 from '../screens/Cards6'
import Cards7 from '../screens/Cards7'
import Cards8 from '../screens/Cards8'
import Cards9 from '../screens/Cards9'
import Cards10 from '../screens/Cards10'
import Cards11 from '../screens/Cards11'

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

const CardsNavigator = createBottomTabNavigator(
  {
    // Cards1,
    // Cards2,
    // Cards3,
    // Cards4,
    Cards5,
    Cards6,
    Cards7,
    // Cards8,
    Cards9,
    // Cards10,
    Cards11,
  },
  TabNavigatorOptions([
    // { key: 'Cards1', label: '1' },
    // { key: 'Cards2', label: '2' },
    // { key: 'Cards3', label: '3' },
    // { key: 'Cards4', label: '4' },
    { key: 'Cards5', label: '5' },
    { key: 'Cards6', label: '6' },
    { key: 'Cards7', label: '7' },
    // { key: 'Cards8', label: '8' },
    { key: 'Cards9', label: '9' },
    // { key: 'Cards10', label: '10' },
    { key: 'Cards11', label: '11' },
  ])
)

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
  Interests,
})

const AppNavigator = createSwitchNavigator(
  {
    Cards: CardsNavigator,
    Landing,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  { initialRouteName: 'Cards', headerMode: 'none' }
)

export default AppNavigator
