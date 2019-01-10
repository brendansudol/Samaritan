import { Constants } from 'expo'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

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
    if (top) {
      return <View style={[styles.container, style]}>{children}</View>
    }
    return <View {...{ style }}>{children}</View>
  }
}
