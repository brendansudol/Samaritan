import { AppLoading, Asset, Font, Icon } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { ThemeProvider } from './components'
import AppNavigator from './navigation/AppNavigator'
import reducer from './reducers'

// TODO: remove logger in prod
const middleware = [thunk, createLogger()]
const store = createStore(reducer, applyMiddleware(...middleware))

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: '#f1c40f',
  },
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <ThemeProvider>
              <PaperProvider theme={theme}>
                <AppNavigator />
              </PaperProvider>
            </ThemeProvider>
          </Provider>
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        Icons: require('./assets/icons/icomoon.ttf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
        'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
        'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
        tinderclone: require('./assets/fonts/tinderclone.ttf'),
      }),
    ])
  }

  _handleLoadingError = error => {
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
