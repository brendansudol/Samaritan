import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import ExampleA from '../components/Experiments/A/Example'
import ExampleB from '../components/Experiments/B/Example'
import ExampleC from '../components/Experiments/C/Example'
import ExampleD from '../components/Experiments/D/Example'
import ExampleE from '../components/Experiments/E/Example'
import {
  StackNavigatorOptions,
  TabNavigatorOptions,
} from '../components/Navigation'
import Cause from '../screens/Cause'
import Causes from '../screens/Causes'
import Causes2 from '../screens/Causes2'
import Interests from '../screens/Interests'
import Landing from '../screens/Landing'
import Profile from '../screens/Profile'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const CausesStack = createStackNavigator(
  {
    Causes2,
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

const CardSwiperTabNavigator = createBottomTabNavigator(
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

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    CardSwipers: CardSwiperTabNavigator,
    Landing,
    Main: MainTabNavigator,
  },
  { initialRouteName: 'Auth', headerMode: 'none' }
)

const App = createAppContainer(RootNavigator)

export default App
