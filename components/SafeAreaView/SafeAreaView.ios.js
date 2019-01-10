import { Constants } from 'expo'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
})

export default class extends React.PureComponent {
  static defaultProps = {
    top: false,
    style: undefined,
  }

  render() {
    const { top, style, children } = this.props
    // https://github.com/facebook/react-native/issues/17638#issuecomment-370512300
    const majorIOSVersion = parseInt(
      Constants.platform.ios.systemVersion.split('.')[0],
      10
    )
    if (top && majorIOSVersion < 11) {
      return <View style={[styles.container, style]}>{children}</View>
    }
    return <SafeAreaView {...{ style }}>{children}</SafeAreaView>
  }
}
