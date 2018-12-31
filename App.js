import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { AppLoading, Asset, Font, Icon } from 'expo'

import AppNavigator from './navigation/AppNavigator'

import { ThemeProvider } from './components'

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
          <ThemeProvider>
            <PaperProvider>
              <AppNavigator />
            </PaperProvider>
          </ThemeProvider>
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
